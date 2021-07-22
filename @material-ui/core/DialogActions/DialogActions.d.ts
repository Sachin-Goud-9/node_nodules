import * as React from 'react';
import { StandardProps } from '..';

export interface DialogActionsProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, DialogActionsClassKey> {
  /**
   * The content of the component.
   */
  children?: React.ReactNode;
  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing?: boolean;
}

export type DialogActionsClassKey = 'root' | 'spacing';

/**
 *
 * Demos:
 *
 * - [Dialogs](https://material-ui.com/components/dialogs/)
 *
 * API:
 *
 * - [DialogActions API](https://material-ui.com/api/dialog-actions/)
 */
export default function DialogActions(props: DialogActionsProps): JSX.Element;
