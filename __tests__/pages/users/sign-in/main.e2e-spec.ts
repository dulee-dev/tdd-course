import { test, expect } from '@playwright/test';

test.describe('sign-in-user-form', () => {
  const pageUrl = '/users/sign-in';
  test('if email input invalid, show email error msg', async ({
    page,
    context,
  }) => {
    await page.goto(pageUrl);
    await page.getByLabel('이메일').fill('123sdf@sdfxcv');
    await expect(
      page.getByText('올바른 이메일양식을 입력해주세요.')
    ).toBeVisible();
  });

  test('if form invalid, submit disabled', async ({ page, context }) => {});

  test('if sign-in fail, alert fail', async ({ page, context }) => {});

  test('if ok, alert success', async ({ page, context }) => {});
});
