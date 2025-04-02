import type { BEMConfig, ModifierType } from './type';
import { DEFAULT_CONFIG } from './config';

const BEMClassName = (name: string, config: BEMConfig) => {
  const {
    elementSeparator,
    modifierSeparator
  } = config;

  return (element: string | ModifierType, modifiers?: ModifierType) => {
    if (Array.isArray(element)) {
      modifiers = element;
      element = '';
    }

    const newBlock = element ? name + elementSeparator + element : name;
    const classList: string[] = [newBlock];

    modifiers?.forEach((modifier) => {
      const modifierType = typeof modifier;
      switch (modifierType) {
        case 'string':
          classList.push(modifier as string);
          break;

        case 'object':
          Object.entries(modifier || {}).forEach(([key, value]) => {
            if (value === true) {
              classList.push(newBlock + modifierSeparator + key);
            }
          });
          break;

        default:
          break;
      }
    });

    return classList.join(' ');
  };
};

export const createBEM = (name: string, config?: BEMConfig) => {
  config = { ...DEFAULT_CONFIG, ...config };
  const { prefixCls, blockSeparator } = config;

  const prefixedName = prefixCls ? prefixCls + blockSeparator + name : name;

  return BEMClassName(prefixedName, config);
};

// Bem class for create bem classes with setting common prefixCls
// Usage:
// const bem = new Bem({ prefixCls: 'test' });
// const createBEM2 = (block: string) => bem.create(block);
export class Bem {
  config: BEMConfig;

  constructor(config?: BEMConfig) {
    config = { ...DEFAULT_CONFIG, ...config };
    this.config = config;
  }

  create(block: string) {
    return createBEM(block, this.config);
  }
}