import { test, describe, expect } from 'vitest';
import { checkIsEmail } from './email';

describe('checkIsEmail', () => {
  test('if not email, return false', () => {
    const text = 'asdf1df@dsfdsf';
    const expected = false;

    const result = checkIsEmail(text);

    expect(result).toEqual(expected);
  });

  test('if email, return true', () => {
    const text = 'asd1s1df@dsfdsf.com';
    const expected = true;

    const result = checkIsEmail(text);

    expect(result).toEqual(expected);
  });
});
