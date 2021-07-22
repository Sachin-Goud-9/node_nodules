"use strict";

const t = require("../../");
const stringifyValidator = require("../utils/stringifyValidator");
const toFunctionName = require("../utils/toFunctionName");

const NODE_PREFIX = "BabelNode";

let code = `// NOTE: This file is autogenerated. Do not modify.
// See packages/babel-types/scripts/generators/flow.js for script used.

declare class ${NODE_PREFIX}Comment {
  value: string;
  start: number;
  end: number;
  loc: ${NODE_PREFIX}SourceLocation;
}

declare class ${NODE_PREFIX}CommentBlock extends ${NODE_PREFIX}Comment {
  type: "CommentBlock";
}

declare class ${NODE_PREFIX}CommentLine extends ${NODE_PREFIX}Comment {
  type: "CommentLine";
}

declare class ${NODE_PREFIX}SourceLocation {
  start: {
    line: number;
    column: number;
  };

  end: {
    line: number;
    column: number;
  };
}

declare class ${NODE_PREFIX} {
  leadingComments?: Array<${NODE_PREFIX}Comment>;
  innerComments?: Array<${NODE_PREFIX}Comment>;
  trailingComments?: Array<${NODE_PREFIX}Comment>;
  start: ?number;
  end: ?number;
  loc: ?${NODE_PREFIX}SourceLocation;
  extra?: { [string]: mixed };
}\n\n`;

//

const lines = [];

for (const type in t.NODE_FIELDS) {
  const fields = t.NODE_FIELDS[type];

  const struct = ['type: "' + type + '";'];
  const args = [];
  const builderNames = t.BUILDER_KEYS[type];

  Object.keys(t.NODE_FIELDS[type])
    .sort((fieldA, fieldB) => {
      const indexA = t.BUILDER_KEYS[type].indexOf(fieldA);
      const indexB = t.BUILDER_KEYS[type].indexOf(fieldB);
      if (indexA === indexB) return fieldA < fieldB ? -1 : 1;
      if (indexA === -1) return 1;
      if (indexB === -1) return -1;
      return indexA - indexB;
    })
    .forEach(fieldName => {
      const field = fields[fieldName];

      let suffix = "";
      if (field.optional || field.default != null) suffix += "?";

      let typeAnnotation = "any";

      const validate = field.validate;
      if (validate) {
        typeAnnotation = stringifyValidator(validate, NODE_PREFIX);
      }

      if (typeAnnotation) {
        suffix += ": " + typeAnnotation;
      }
      if (builderNames.includes(fieldName)) {
        args.push(t.toBindingIdentifierName(fieldName) + suffix);
      }

      if (t.isValidIdentifier(fieldName)) {
        struct.push(fieldName + suffix + ";");
      }
    });

  code += `declare class ${NODE_PREFIX}${type} extends ${NODE_PREFIX} {
  ${struct.join("\n  ").trim()}
}\n\n`;

  // Flow chokes on super() and import() :/
  if (type !== "Super" && type !== "Import") {
    lines.push(
      `declare function ${toFunctionName(type)}(${args.join(
        ", "
      )}): ${NODE_PREFIX}${type};`
    );
  } else {
    const functionName = toFunctionName(type);
    lines.push(
      `declare function _${functionName}(${args.join(
        ", "
      )}): ${NODE_PREFIX}${type};`,
      `declare export { _${functionName} as ${functionName} }`
    );
  }
}

for (const typeName of t.TYPES) {
  const isDeprecated = !!t.DEPRECATED_KEYS[typeName];
  const realName = isDeprecated ? t.DEPRECATED_KEYS[typeName] : typeName;

  let decl = `declare function is${typeName}(node: ?Object, opts?: ?Object): boolean`;
  if (t.NODE_FIELDS[realName]) {
    decl += ` %checks (node instanceof ${NODE_PREFIX}${realName})`;
  }
  lines.push(decl);

  lines.push(
    `declare function assert${typeName}(node: ?Object, opts?: ?Object): void`
  );
}

lines.push(
  // assert/
  `declare function assertNode(obj: any): void`,

  // builders/
  // eslint-disable-next-line max-len
  `declare function createTypeAnnotationBasedOnTypeof(type: 'string' | 'number' | 'undefined' | 'boolean' | 'function' | 'object' | 'symbol'): ${NODE_PREFIX}TypeAnnotation`,
  // eslint-disable-next-line max-len
  `declare function createUnionTypeAnnotation(types: Array<${NODE_PREFIX}FlowType>): ${NODE_PREFIX}UnionTypeAnnotation`,
  // eslint-disable-next-line max-len
  `declare function createFlowUnionType(types: Array<${NODE_PREFIX}FlowType>): ${NODE_PREFIX}UnionTypeAnnotation`,
  // this smells like "internal API"
  // eslint-disable-next-line max-len
  `declare function buildChildren(node: { children: Array<${NODE_PREFIX}JSXText | ${NODE_PREFIX}JSXExpressionContainer | ${NODE_PREFIX}JSXSpreadChild | ${NODE_PREFIX}JSXElement | ${NODE_PREFIX}JSXFragment | ${NODE_PREFIX}JSXEmptyExpression> }): Array<${NODE_PREFIX}JSXText | ${NODE_PREFIX}JSXExpressionContainer | ${NODE_PREFIX}JSXSpreadChild | ${NODE_PREFIX}JSXElement | ${NODE_PREFIX}JSXFragment>`,

  // clone/
  `declare function clone<T>(n: T): T;`,
  `declare function cloneDeep<T>(n: T): T;`,
  `declare function cloneDeepWithoutLoc<T>(n: T): T;`,
  `declare function cloneNode<T>(n: T, deep?: boolean, withoutLoc?: boolean): T;`,
  `declare function cloneWithoutLoc<T>(n: T): T;`,

  // comments/
  `declare type CommentTypeShorthand = 'leading' | 'inner' | 'trailing'`,
  // eslint-disable-next-line max-len
  `declare function addComment<T: Node>(node: T, type: CommentTypeShorthand, content: string, line?: boolean): T`,
  // eslint-disable-next-line max-len
  `declare function addComments<T: Node>(node: T, type: CommentTypeShorthand, comments: Array<Comment>): T`,
  `declare function inheritInnerComments(node: Node, parent: Node): void`,
  `declare function inheritLeadingComments(node: Node, parent: Node): void`,
  `declare function inheritsComments<T: Node>(node: T, parent: Node): void`,
  `declare function inheritTrailingComments(node: Node, parent: Node): void`,
  `declare function removeComments<T: Node>(node: T): T`,

  // converters/
  `declare function ensureBlock(node: ${NODE_PREFIX}, key: string): ${NODE_PREFIX}BlockStatement`,
  `declare function toBindingIdentifierName(name?: ?string): string`,
  // eslint-disable-next-line max-len
  `declare function toBlock(node: ${NODE_PREFIX}Statement | ${NODE_PREFIX}Expression, parent?: ${NODE_PREFIX}Function | null): ${NODE_PREFIX}BlockStatement`,
  // eslint-disable-next-line max-len
  `declare function toComputedKey(node: ${NODE_PREFIX}Method | ${NODE_PREFIX}Property, key?: ${NODE_PREFIX}Expression | ${NODE_PREFIX}Identifier): ${NODE_PREFIX}Expression`,
  // eslint-disable-next-line max-len
  `declare function toExpression(node: ${NODE_PREFIX}ExpressionStatement | ${NODE_PREFIX}Expression | ${NODE_PREFIX}Class | ${NODE_PREFIX}Function): ${NODE_PREFIX}Expression`,
  `declare function toIdentifier(name?: ?string): string`,
  // eslint-disable-next-line max-len
  `declare function toKeyAlias(node: ${NODE_PREFIX}Method | ${NODE_PREFIX}Property, key?: ${NODE_PREFIX}): string`,
  // toSequenceExpression relies on types that aren't declared in flow
  // eslint-disable-next-line max-len
  `declare function toStatement(node: ${NODE_PREFIX}Statement | ${NODE_PREFIX}Class | ${NODE_PREFIX}Function | ${NODE_PREFIX}AssignmentExpression, ignore?: boolean): ${NODE_PREFIX}Statement | void`,
  `declare function valueToNode(value: any): ${NODE_PREFIX}Expression`,

  // modifications/
  // eslint-disable-next-line max-len
  `declare function removeTypeDuplicates(types: Array<${NODE_PREFIX}FlowType>): Array<${NODE_PREFIX}FlowType>`,
  // eslint-disable-next-line max-len
  `declare function appendToMemberExpression(member: ${NODE_PREFIX}MemberExpression, append: ${NODE_PREFIX}, computed?: boolean): ${NODE_PREFIX}MemberExpression`,
  // eslint-disable-next-line max-len
  `declare function inherits<T: Node>(child: T, parent: ${NODE_PREFIX} | null | void): T`,
  // eslint-disable-next-line max-len
  `declare function prependToMemberExpression(member: ${NODE_PREFIX}MemberExpression, prepend: ${NODE_PREFIX}Expression): ${NODE_PREFIX}MemberExpression`,
  `declare function removeProperties<T>(n: T, opts: ?{}): void;`,
  `declare function removePropertiesDeep<T>(n: T, opts: ?{}): T;`,

  // retrievers/
  // eslint-disable-next-line max-len
  `declare function getBindingIdentifiers(node: ${NODE_PREFIX}, duplicates: boolean, outerOnly?: boolean): { [key: string]: ${NODE_PREFIX}Identifier | Array<${NODE_PREFIX}Identifier> }`,
  // eslint-disable-next-line max-len
  `declare function getOuterBindingIdentifiers(node: Node, duplicates: boolean): { [key: string]: ${NODE_PREFIX}Identifier | Array<${NODE_PREFIX}Identifier> }`,

  // traverse/
  `declare type TraversalAncestors = Array<{
    node: BabelNode,
    key: string,
    index?: number,
  }>;
  declare type TraversalHandler<T> = (BabelNode, TraversalAncestors, T) => void;
  declare type TraversalHandlers<T> = {
    enter?: TraversalHandler<T>,
    exit?: TraversalHandler<T>,
  };`.replace(/(^|\n) {2}/g, "$1"),
  // eslint-disable-next-line
  `declare function traverse<T>(n: BabelNode, TraversalHandler<T> | TraversalHandlers<T>, state?: T): void;`,
  `declare function traverseFast<T>(n: Node, h: TraversalHandler<T>, state?: T): void;`,

  // utils/
  // cleanJSXElementLiteralChild is not exported
  // inherit is not exported
  `declare function shallowEqual(actual: Object, expected: Object): boolean`,

  // validators/
  // eslint-disable-next-line max-len
  `declare function buildMatchMemberExpression(match: string, allowPartial?: boolean): (?BabelNode) => boolean`,
  `declare function is(type: string, n: BabelNode, opts: Object): boolean;`,
  `declare function isBinding(node: BabelNode, parent: BabelNode, grandparent?: BabelNode): boolean`,
  `declare function isBlockScoped(node: BabelNode): boolean`,
  `declare function isImmutable(node: BabelNode): boolean`,
  `declare function isLet(node: BabelNode): boolean`,
  `declare function isNode(node: ?Object): boolean`,
  `declare function isNodesEquivalent(a: any, b: any): boolean`,
  `declare function isPlaceholderType(placeholderType: string, targetType: string): boolean`,
  `declare function isReferenced(node: BabelNode, parent: BabelNode, grandparent?: BabelNode): boolean`,
  `declare function isScope(node: BabelNode, parent: BabelNode): boolean`,
  `declare function isSpecifierDefault(specifier: BabelNodeModuleSpecifier): boolean`,
  `declare function isType(nodetype: ?string, targetType: string): boolean`,
  `declare function isValidES3Identifier(name: string): boolean`,
  `declare function isValidES3Identifier(name: string): boolean`,
  `declare function isValidIdentifier(name: string): boolean`,
  `declare function isVar(node: BabelNode): boolean`,
  // eslint-disable-next-line max-len
  `declare function matchesPattern(node: ?BabelNode, match: string | Array<string>, allowPartial?: boolean): boolean`,
  `declare function validate(n: BabelNode, key: string, value: mixed): void;`
);

for (const type in t.FLIPPED_ALIAS_KEYS) {
  const types = t.FLIPPED_ALIAS_KEYS[type];
  code += `type ${NODE_PREFIX}${type} = ${types
    .map(type => `${NODE_PREFIX}${type}`)
    .join(" | ")};\n`;
}

code += `\ndeclare module "@babel/types" {
  ${lines.join("\n").replace(/\n/g, "\n  ").trim()}
}\n`;

//

process.stdout.write(code);