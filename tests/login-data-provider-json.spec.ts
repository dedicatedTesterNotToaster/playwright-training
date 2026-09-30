import { test, expect } from '@playwright/test';
import fs from 'node:fs';

const login = JSON.parse(
  fs.readFileSync('test-data/login.json', 'utf8')
);

test('task 1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/'); //found in notes in pptx
  await page.locator('[data-test="username"]').fill(login.username);
  await page.locator('[data-test="password"]').fill(login.password);
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory/);
});
