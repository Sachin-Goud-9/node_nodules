import { FUNCTION_CAPTION, ELEMENT_CAPTION } from '../captions';
import { InspectionType, inspectValue } from '../inspection';
import { isHtmlTag } from '../isHtmlTag';
import { createSummaryValue, isTooLongForDefaultValueSummary } from '../../../../lib';
import { generateCode } from '../generateCode';
import { generateObject } from './generateObject';
import { generateArray } from './generateArray';
import { getPrettyIdentifier } from './prettyIdentifier';

function generateFunc({
  inferredType,
  ast
}) {
  const {
    identifier
  } = inferredType;

  if (identifier != null) {
    return createSummaryValue(getPrettyIdentifier(inferredType), generateCode(ast));
  }

  const prettyCaption = generateCode(ast, true);
  return !isTooLongForDefaultValueSummary(prettyCaption) ? createSummaryValue(prettyCaption) : createSummaryValue(FUNCTION_CAPTION, generateCode(ast));
} // All elements are JSX elements.
// JSX elements are not supported by escodegen.


function generateElement(defaultValue, inspectionResult) {
  const {
    inferredType
  } = inspectionResult;
  const {
    identifier
  } = inferredType;

  if (identifier != null) {
    if (!isHtmlTag(identifier)) {
      const prettyIdentifier = getPrettyIdentifier(inferredType);
      return createSummaryValue(prettyIdentifier, defaultValue);
    }
  }

  return !isTooLongForDefaultValueSummary(defaultValue) ? createSummaryValue(defaultValue) : createSummaryValue(ELEMENT_CAPTION, defaultValue);
}

export function createDefaultValue(defaultValue) {
  try {
    const inspectionResult = inspectValue(defaultValue);

    switch (inspectionResult.inferredType.type) {
      case InspectionType.OBJECT:
        return generateObject(inspectionResult);

      case InspectionType.FUNCTION:
        return generateFunc(inspectionResult);

      case InspectionType.ELEMENT:
        return generateElement(defaultValue, inspectionResult);

      case InspectionType.ARRAY:
        return generateArray(inspectionResult);

      default:
        return null;
    }
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return null;
}