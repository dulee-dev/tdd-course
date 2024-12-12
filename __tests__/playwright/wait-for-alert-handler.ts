import { Dialog, Page } from '@playwright/test';

export const waitForAlertHandler = (
  page: Page,
  fn: (alert: Dialog) => Promise<unknown>
) => {
  return new Promise((resolve) => {
    page.on('dialog', async (alert) => {
      const result = await fn(alert);
      resolve(result);
    });
  });
};
