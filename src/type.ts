export interface BEMConfig {
  prefixCls?: string;
  blockSeparator?: string;
  elementSeparator?: string;
  modifierSeparator?: string;
}

export type ModifierType = (string | undefined | { [x: string]: boolean | undefined })[];
