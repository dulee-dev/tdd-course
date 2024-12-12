import { waitForAlertMsg } from '@__tests__/playwright/wait-for-alert-msg';
import { test, expect } from '@playwright/test';

test.describe('playground', () => {
  const pageUrl = '/playground/alert';

  test('if visit, alert message is "welcome"', async ({ page, context }) => {
    const alertPromise = waitForAlertMsg(page);

    await page.goto(pageUrl);
    const msg = await alertPromise;
    expect(msg).toEqual('welcome');
  });
});
