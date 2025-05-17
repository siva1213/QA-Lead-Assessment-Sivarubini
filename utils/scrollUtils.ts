// utils/scrollUtils.ts

import { Page } from '@playwright/test';

/**
 * Scrolls the page to the bottom
 */
export async function scrollToBottom(page: Page): Promise<void> {
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
}

/**
 * Scrolls to a specific element
 */
export async function scrollToElement(page: Page, selector: string): Promise<void> {
  await page.evaluate((selector) => {
    const el = document.querySelector(selector);
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, selector);
}
