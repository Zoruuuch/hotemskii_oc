import { test, expect } from '@playwright/test';

test('user ca search by product name', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole('textbox', { name: 'Search Products' }).click();
  await page.getByRole('textbox', { name: 'Search Products' }).pressSequentially('cucumber');
  await page.getByRole('link', { name: 'MARINATED CUCUMBERS NEZHIN STYLE $' }).click();
  await expect(page.getByRole('heading', { name: 'MARINATED CUCUMBERS NEZHIN' })).toBeVisible();
});