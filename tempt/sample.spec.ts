import { test, describe, expect } from 'vitest';
import { drawStack, stacks } from './sample';

describe('draw', () => {
  test('if draw, return stack', () => {
    const stack = drawStack();
    expect(stacks.includes(stack)).toEqual(true);
  });

  test('1+1=2', () => {
    expect(1 + 1).toEqual(2);
  });

  test('1+2=3', () => {
    expect(1 + 2).toEqual(3);
  });

  test('1+3=4', () => {
    expect(1 + 3).toEqual(4);
  });

  test('1+4=5', () => {
    expect(1 + 4).toEqual(5);
  });
});
