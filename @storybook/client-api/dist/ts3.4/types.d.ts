import { Addon, StoryId, StoryName, StoryKind, ViewMode, StoryIdentifier, StoryFn, Parameters, Args, ArgTypes, StoryApi, DecoratorFunction, LoaderFunction, DecorateStoryFunction, StoryContext } from '@storybook/addons';
import StoryStore from './story_store';
import { HooksContext } from './hooks';
export interface ErrorLike {
    message: string;
    stack: string;
}
export interface StoryMetadata {
    parameters?: Parameters;
    decorators?: DecoratorFunction[];
    loaders?: LoaderFunction[];
}
export declare type ArgTypesEnhancer = (context: StoryContext) => ArgTypes;
export declare type ArgsEnhancer = (context: StoryContext) => Args;
export declare type StorySpecifier = StoryId | {
    name: StoryName;
    kind: StoryKind;
} | '*';
export interface StoreSelectionSpecifier {
    storySpecifier: StorySpecifier;
    viewMode: ViewMode;
    singleStory?: boolean;
    args?: Args;
    globals?: Args;
}
export interface StoreSelection {
    storyId: StoryId;
    viewMode: ViewMode;
}
export declare type AddStoryArgs = StoryIdentifier & {
    storyFn: StoryFn<any>;
    parameters?: Parameters;
    decorators?: DecoratorFunction[];
    loaders?: LoaderFunction[];
};
export declare type StoreItem = StoryIdentifier & {
    parameters: Parameters;
    getDecorated: () => StoryFn<any>;
    getOriginal: () => StoryFn<any>;
    applyLoaders: () => Promise<StoryContext>;
    runSetupFunction: () => Promise<any>;
    storyFn: StoryFn<any>;
    unboundStoryFn: StoryFn<any>;
    hooks: HooksContext;
    args: Args;
    initialArgs: Args;
    argTypes: ArgTypes;
};
export declare type PublishedStoreItem = StoreItem & {
    globals: Args;
};
export interface StoreData {
    [key: string]: StoreItem;
}
export interface ClientApiParams {
    storyStore: StoryStore;
    decorateStory?: DecorateStoryFunction;
    noStoryModuleAddMethodHotDispose?: boolean;
}
export declare type ClientApiReturnFn<StoryFnReturnType> = (...args: any[]) => StoryApi<StoryFnReturnType>;
export { StoryApi, DecoratorFunction };
export interface ClientApiAddon<StoryFnReturnType = unknown> extends Addon {
    apply: (a: StoryApi<StoryFnReturnType>, b: any[]) => any;
}
export interface ClientApiAddons<StoryFnReturnType> {
    [key: string]: ClientApiAddon<StoryFnReturnType>;
}
export interface GetStorybookStory {
    name: string;
    render: StoryFn;
}
export interface GetStorybookKind {
    kind: string;
    fileName: string;
    stories: GetStorybookStory[];
}
export declare type RenderContextWithoutStoryContext = StoreItem & {
    forceRender: boolean;
    showMain: () => void;
    showError: (error: {
        title: string;
        description: string;
    }) => void;
    showException: (err: Error) => void;
};
export declare type RenderContext = RenderContextWithoutStoryContext & {
    storyContext: StoryContext;
};
interface SBBaseType {
    required?: boolean;
    raw?: string;
}
export declare type SBScalarType = SBBaseType & {
    name: 'boolean' | 'string' | 'number' | 'function';
};
export declare type SBArrayType = SBBaseType & {
    name: 'array';
    value: SBType;
};
export declare type SBObjectType = SBBaseType & {
    name: 'object';
    value: Record<string, SBType>;
};
export declare type SBEnumType = SBBaseType & {
    name: 'enum';
    value: (string | number)[];
};
export declare type SBIntersectionType = SBBaseType & {
    name: 'intersection';
    value: SBType[];
};
export declare type SBUnionType = SBBaseType & {
    name: 'union';
    value: SBType[];
};
export declare type SBOtherType = SBBaseType & {
    name: 'other';
    value: string;
};
export declare type SBType = SBScalarType | SBEnumType | SBArrayType | SBObjectType | SBIntersectionType | SBUnionType | SBOtherType;
