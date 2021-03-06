import { toId } from '@storybook/csf';
import { StoriesHash, Story, Group, StoryId, Root, StoriesRaw } from '../lib/stories';
import { Args, ModuleFn } from '../index';
declare type Direction = -1 | 1;
declare type ParameterName = string;
declare type ViewMode = 'story' | 'info' | 'settings' | string | undefined;
export interface SubState {
    storiesHash: StoriesHash;
    storyId: StoryId;
    viewMode: ViewMode;
    storiesConfigured: boolean;
    storiesFailed?: Error;
}
export interface SubAPI {
    storyId: typeof toId;
    resolveStory: (storyId: StoryId, refsId?: string) => Story | Group | Root;
    selectFirstStory: () => void;
    selectStory: (kindOrId: string, story?: string, obj?: {
        ref?: string;
        viewMode?: ViewMode;
    }) => void;
    getCurrentStoryData: () => Story | Group;
    setStories: (stories: StoriesRaw, failed?: Error) => Promise<void>;
    jumpToComponent: (direction: Direction) => void;
    jumpToStory: (direction: Direction) => void;
    getData: (storyId: StoryId, refId?: string) => Story | Group;
    getParameters: (storyId: StoryId | {
        storyId: StoryId;
        refId: string;
    }, parameterName?: ParameterName) => Story['parameters'] | any;
    getCurrentParameter<S>(parameterName?: ParameterName): S;
    updateStoryArgs(story: Story, newArgs: Args): void;
    resetStoryArgs: (story: Story, argNames?: string[]) => void;
    findLeafStoryId(StoriesHash: StoriesHash, storyId: StoryId): StoryId;
}
export declare const init: ModuleFn;
export {};
