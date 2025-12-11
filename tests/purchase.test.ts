import { test, expect } from '@playwright/test';

test('Logged in user can place order for item', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/login');
  
  await page.getByRole('main').getByRole('textbox', { name: 'Please Enter Your Email' }).fill('xotabu4@gmail.com');

  await page.getByRole('textbox', { name: 'Please Enter Your Password' }).fill('xotabu4@gmail.com');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole("heading", {name: "Login"})).not.toBeVisible();

  await page.getByRole('link', { name: 'Brands ' }).click();
  await page.locator('div').filter({ hasText: /^Nizhyn cannery$/ }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Nizhyn cannery' }).click();
  await page.getByRole('link', { name: 'CHERRY TOMATOES By Nizhyn' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await expect(page.getByRole("heading", {name: "Thank you for your order."})).toBeVisible();
});