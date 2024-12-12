import { test, describe, expect } from 'vitest';
import { signIn } from './users-api.effect';

describe('signIn', () => {
  test('if not matched, return false', async () => {
    const email = 'adsfadsf@comdfa.com';
    const password = '123123aa!';
    const expected = false;

    const result = await signIn({ email, password });

    expect(result).toEqual(expected);
  });

  test('if matched, return true', async () => {
    const email = 'dulee.dev@gmail.com';
    const password = '123123aa!';
    const expected = true;

    const result = await signIn({ email, password });

    expect(result).toEqual(expected);
  });
});
