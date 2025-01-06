
import { createBEM } from '../index';

describe('createBEM', () => {
  it('should create BEM classes', () => {
    const bem = createBEM('my-component');
    expect(bem('')).toBe('my-component');
    expect(bem('foo')).toBe('my-component__foo');
    expect(bem(['foo', 'foo1', { foo2: true }])).toBe('my-component foo foo1 my-component--foo2');
    expect(bem('foo', ['bar'])).toBe('my-component__foo bar');
    expect(bem('foo', ['bar', 'bar2'])).toBe('my-component__foo bar bar2');
    expect(bem('foo', ['bar', { 'bar1': true, 'bar2': true }])).toBe('my-component__foo bar my-component__foo--bar1 my-component__foo--bar2');
  });
});