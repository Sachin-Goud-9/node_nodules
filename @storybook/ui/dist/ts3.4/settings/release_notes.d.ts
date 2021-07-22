import { FunctionComponent } from 'react';
export interface ReleaseNotesProps {
    didHitMaxWaitTime: boolean;
    isLoaded: boolean;
    setLoaded: (isLoaded: boolean) => void;
    version: string;
}
declare const PureReleaseNotesScreen: FunctionComponent<ReleaseNotesProps>;
declare const ReleaseNotesScreen: FunctionComponent<Pick<ReleaseNotesProps, Exclude<keyof ReleaseNotesProps, 'isLoaded' | 'setLoaded' | 'didHitMaxWaitTime'>>>;
export { ReleaseNotesScreen, PureReleaseNotesScreen };
