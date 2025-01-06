# Bem使用

Bem 是一套命名约定，用于帮助你写出可维护的 CSS 代码。

## Install

```bash
pnpm install
```

```bash
pnpm dev
pnpm build
```

## createBem方法

```ts
export const createBEM = (name: string, config?: BEMConfig) => {
}

import { createBEM } from 'bem';
const bem = createBEM('my-component');
```

### config配置项

| 配置项            | 类型   | 描述           | 默认值 |
| ----------------- | ------ | -------------- | ------ |
| prefixCls         | string | 前缀           | ''     |
| blockSeparator    | string | Block分隔符    | '-'    |
| elementSeparator  | string | Element分隔符  | '__'   |
| modifierSeparator | string | Modifier分隔符 | '--'   |

- 第一个name参数，生成的类名为:`prefixCls + blockSeparator + name`
- 第二个config参数，设置配置项

## bem方法

```ts
export type ModifierType = (string | undefined | { [x: string]: boolean | undefined })[];

const bem = (element: string | ModifierType, modifiers?: ModifierType) => {
  // ...
}

bem('');  // my-component
bem('foo');  // my-component__foo
bem(['foo', 'foo1', { foo2: true }]); // my-component foo foo1 my-component--foo2
bem('foo', ['bar']);  // my-component__foo bar
bem('foo', ['bar', { 'bar1': true, 'bar2': true }]);  // my-component__foo bar my-component__foo--bar1 my-component__foo--bar2
```

1. 第一个element参数
   - 当是`string`类型时，代表`element`元素，生成的类名为:`name + elementSeparator + element`
   - 当是`ModifierType`类型时，同第二个modifiers参数

2. 第二个modifiers参数，是个数组
   - 当数组元素为`string`类型时，相当于多个className
   - 当数组元素为`{[x:string]: true}`类型时，代码`modifier`元素，生成的类名为: `name + elementSeparator + element + modifierSeparator + modifier`
