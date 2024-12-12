import { waitForAlertHandler } from '@__tests__/playwright/wait-for-alert-handler';
import { test, expect } from '@playwright/test';

test.describe('playground', () => {
  const pageUrl = '/playground/alert';

  test('if visit, alert message is "welcome"', async ({ page, context }) => {
    const alertPromise = waitForAlertHandler(page, async (alert) => {
      return alert.message();
    });

    await page.goto(pageUrl);
    const msg = await alertPromise;
    expect(msg).toEqual('welcome');
    // await page.waitForTimeout(1000);
  });
});
