import React from 'react';
import type { StoriesHash } from '@storybook/api';
export declare type Item = StoriesHash[keyof StoriesHash];
declare const PreviewConnected: React.NamedExoticComponent<{
    id: string;
    withLoader: boolean;
}>;
export default PreviewConnected;
