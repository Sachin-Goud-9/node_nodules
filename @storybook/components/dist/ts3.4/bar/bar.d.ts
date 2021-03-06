import { FunctionComponent } from 'react';
export interface SideProps {
    left?: boolean;
    right?: boolean;
}
export declare const Bar: import("@emotion/styled-base").StyledComponent<any, Pick<any, string | number | symbol>, import("@storybook/theming").Theme>;
export interface FlexBarProps {
    border?: boolean;
    children?: any;
    backgroundColor?: string;
}
export declare const FlexBar: FunctionComponent<FlexBarProps>;
