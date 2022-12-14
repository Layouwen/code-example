import { test, expect } from '@playwright/test';
import config from '../config';

test('login', async ({page}) => {
  await page.goto('http://lp.locnavi.com:3126/#/user/login');
  await page.locator('i svg').click();
  await page.getByText('简体中文').click();
  await page.getByPlaceholder('用户名').click();
  await page.getByPlaceholder('用户名').fill(config.username);
  await page.getByPlaceholder('用户名').press('Tab');
  await page.getByPlaceholder('密码').fill(config.password);
  await page.getByRole('button', {name: '登 录'}).click();

  await expect(page).toHaveTitle(/监控首页/);
});
