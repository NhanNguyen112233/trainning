export type TSkeletopShape = 'circle' | 'rectangle';
export type TAnnimation = 'wave' | 'none';
export interface ISkeletonProps {
  height: number;
  width: number;
  /**
   * @description the style class is applied to the custom class
   */
  styleClass: string;
  style: { [klass: string]: any };
  borderRadius: string;
  shape: TSkeletopShape;
  animation: TAnnimation;
  diameter: number;
}

export const DEFAULT_SKELETON_CONFIG = {
  DEFAULT_HEIGHT: '100%',
  DEFAULT_WIDTH: '100%',
  DEFAULT_BORDER_RADIUS: 'auto',
};
