import { draw } from 'radashi';

export const stacks = ['nextjs', 'playwright', 'vitest'];

export const drawStack = (): string => {
  return draw(stacks) as string;
};
