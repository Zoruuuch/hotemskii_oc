import { test, expect } from '@playwright/test';

test("user can submit 'Become A MERN Store Seller!' form", async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/sell');
  await page.getByRole('textbox', { name: 'Your Full Name' }).fill('testtttt');
  await page.getByRole('textbox', { name: 'Your Email Address' }).fill(Date.now() + '@test.com');
  await page.getByRole('textbox', { name: 'Your Phone Number' }).fill('1231231232');
  await page.getByRole('textbox', { name: 'Your Business Brand' }).fill('loltechololo');
  await page.getByRole('textbox', { name: 'Please Describe Your Business' }).fill('test loltecholololo');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('textbox', { name: 'Your Full Name' })).toBeEmpty();
});