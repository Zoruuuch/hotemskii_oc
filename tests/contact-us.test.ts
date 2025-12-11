import { test, expect } from '@playwright/test';

test('user can submit contact us form', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/contact');
  await page.getByRole('link', { name: 'Contact Us' }).nth(1).click();
  await page.getByRole('textbox', { name: 'You Full Name' }).click();
  await page.getByRole('textbox', { name: 'You Full Name' }).fill('test');
  await page.getByRole('textbox', { name: 'You Full Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Your Email Address' }).fill('test12323');
  await page.getByRole('textbox', { name: 'Your Email Address' }).press('Alt+@');
  await page.getByRole('textbox', { name: 'Your Email Address' }).press('Alt+@');
  
  await page.getByRole('textbox', { name: 'Your Email Address' }).fill(Date.now() + '@test.com');
  await page.getByRole('textbox', { name: 'Please Describe Your Message' }).click();
  await page.getByRole('textbox', { name: 'Please Describe Your Message' }).fill('Helo its my first script from playwright framework!');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('textbox', { name: 'You Full Name' })).toBeEmpty();
});

test('user can NOT submit contact us form with email that was used before', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/contact');
  await page.getByRole('link', { name: 'Contact Us' }).nth(1).click();
  await page.getByRole('textbox', { name: 'You Full Name' }).click();
  await page.getByRole('textbox', { name: 'You Full Name' }).fill('test');
  await page.getByRole('textbox', { name: 'You Full Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Your Email Address' }).fill('test12323');
  await page.getByRole('textbox', { name: 'Your Email Address' }).press('Alt+@');
  await page.getByRole('textbox', { name: 'Your Email Address' }).press('Alt+@');
  
  await page.getByRole('textbox', { name: 'Your Email Address' }).fill('test@test.com');
  await page.getByRole('textbox', { name: 'Please Describe Your Message' }).click();
  await page.getByRole('textbox', { name: 'Please Describe Your Message' }).fill('Helo its my first script from playwright framework!');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading', { name: 'Please Try Again!' })).toBeVisible();
  await expect(page.getByText('A request already existed for same email address')).toBeVisible();
});
