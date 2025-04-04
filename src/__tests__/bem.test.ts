
import { Bem, createBEM } from '../index';

const bemIns = new Bem({ prefixCls: 'test' });
const createBEM2 = (block: string) => bemIns.create(block);

describe('createBem', () => {
  it('create BEM classes with normal way', () => {
    const bem = createBEM('my-component');
    expect(bem('')).toBe('my-component');
    expect(bem('foo')).toBe('my-component__foo');
    expect(bem(['foo', 'foo1', { foo2: true }])).toBe('my-component foo foo1 my-component--foo2');
    expect(bem('foo', ['bar'])).toBe('my-component__foo bar');
    expect(bem('foo', ['bar', 'bar2'])).toBe('my-component__foo bar bar2');
    expect(bem('foo', ['bar', { 'bar1': true, 'bar2': true }])).toBe('my-component__foo bar my-component__foo--bar1 my-component__foo--bar2');
  });

  it('create bem classes with setting prefix', () => {
    const bem = createBEM2('my-component');
    expect(bem('')).toBe('test-my-component');
    expect(bem('foo')).toBe('test-my-component__foo');
    expect(bem(['foo', 'foo1', { foo2: true }])).toBe('test-my-component foo foo1 test-my-component--foo2');
    expect(bem('foo', ['bar'])).toBe('test-my-component__foo bar');
    expect(bem('foo', ['bar', 'bar2'])).toBe('test-my-component__foo bar bar2');
    expect(bem('foo', ['bar', { 'bar1': true, 'bar2': true }])).toBe('test-my-component__foo bar test-my-component__foo--bar1 test-my-component__foo--bar2');
  });
});