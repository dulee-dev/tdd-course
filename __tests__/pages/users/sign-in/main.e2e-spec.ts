import { waitForAlertMsg } from '@__tests__/playwright/wait-for-alert-msg';
import { test, expect } from '@playwright/test';

test.describe('sign-in-user-form', () => {
  const pageUrl = '/users/sign-in';

  test('if form empty, submit disabled', async ({ page, context }) => {
    await page.goto(pageUrl);
    await expect(page.getByRole('button', { name: '로그인' })).toBeDisabled();
  });

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

  test('if form invalid, submit disabled', async ({ page, context }) => {
    await page.goto(pageUrl);
    await page.getByLabel('이메일').fill('123sdf@sdfxcv');
    await expect(page.getByRole('button', { name: '로그인' })).toBeDisabled();
  });

  test('if sign-in fail, alert fail', async ({ page, context }) => {
    const alertPromise = waitForAlertMsg(page);

    await page.goto(pageUrl);
    await page.getByLabel('이메일').fill('123sdf@sdfxcv.com');
    await page.getByRole('button', { name: '로그인' }).click();
    const msg = await alertPromise;
    expect(msg).toEqual('로그인 실패');
  });

  test('if ok, alert success', async ({ page, context }) => {
    const alertPromise = waitForAlertMsg(page);

    await page.goto(pageUrl);
    await page.getByLabel('이메일').fill('dulee.dev@gmail.com');
    await page.getByLabel('비밀번호').fill('123123aa!');
    await page.getByRole('button', { name: '로그인' }).click();
    const msg = await alertPromise;
    expect(msg).toEqual('로그인 성공');
  });
});
