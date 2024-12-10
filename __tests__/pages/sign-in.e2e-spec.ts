import { test, expect } from '@playwright/test';

test.describe('sign-in', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('check initial state', async ({ page, context }) => {
    await expect(page.getByLabel('아이디')).toBeVisible();
  });

  test('not implemented', async ({ page, context }) => {});
});
