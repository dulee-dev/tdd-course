import { Page } from '@playwright/test';

export const waitForAlertMsg = (page: Page) => {
  return new Promise((resolve) => {
    page.on('dialog', async (alert) => {
      resolve(alert.message());
      alert.accept();
    });
  });
};
