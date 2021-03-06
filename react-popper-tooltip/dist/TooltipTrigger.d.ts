/**
 * @author Mohsin Ul Haq <mohsinulhaq01@gmail.com>
 */
import { Component } from 'react';
import { TooltipTriggerProps, TooltipTriggerState } from './types';
declare class TooltipTrigger extends Component<TooltipTriggerProps, TooltipTriggerState> {
    static defaultProps: {
        closeOnReferenceHidden: boolean;
        defaultTooltipShown: boolean;
        delayHide: number;
        delayShow: number;
        followCursor: boolean;
        onVisibilityChange: () => void;
        placement: string;
        portalContainer: HTMLElement | null;
        trigger: string;
        usePortal: boolean;
        mutationObserverOptions: MutationObserverInit;
        modifiers: never[];
    };
    state: TooltipTriggerState;
    private hideTimeout?;
    private showTimeout?;
    private popperOffset?;
    componentWillUnmount(): void;
    render(): JSX.Element;
    private isControlled;
    private getState;
    private setTooltipState;
    private clearScheduled;
    private showTooltip;
    private hideTooltip;
    private toggleTooltip;
    private clickToggle;
    private contextMenuToggle;
    private isTriggeredBy;
    private getTriggerProps;
}
export default TooltipTrigger;
