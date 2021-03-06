import * as React from 'react';
import { StandardProps } from '..';

export interface GridListTileBarProps extends StandardProps<{}, GridListTileBarClassKey> {
  /**
   * An IconButton element to be used as secondary action target
   * (primary action target is the tile itself).
   */
  actionIcon?: React.ReactNode;
  /**
   * Position of secondary action IconButton.
   */
  actionPosition?: 'left' | 'right';
  /**
   * String or element serving as subtitle (support text).
   */
  subtitle?: React.ReactNode;
  /**
   * Title to be displayed on tile.
   */
  title?: React.ReactNode;
  /**
   * Position of the title bar.
   */
  titlePosition?: 'top' | 'bottom';
}

export type GridListTileBarClassKey =
  | 'root'
  | 'titlePositionBottom'
  | 'titlePositionTop'
  | 'rootSubtitle'
  | 'titleWrap'
  | 'titleWrapActionPosLeft'
  | 'titleWrapActionPosRight'
  | 'title'
  | 'subtitle'
  | 'actionIcon'
  | 'actionIconActionPosLeft';

/**
 * ⚠️ The GridListTileBar component was renamed to ImageListTileBar to align with the current Material Design naming.
 *
 * You should use `import { ImageListTileBar } from '@material-ui/core'`
 * or `import ImageListTileBar from '@material-ui/core/ImageListTileBar'`.
 * API:
 *
 * - [GridListTileBar API](https://material-ui.com/api/grid-list-tile-bar/)
 */
export default function GridListTileBar(props: GridListTileBarProps): JSX.Element;
