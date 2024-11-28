import { test } from '@playwright/test';
import { LoginPage } from '../page/login-page';
import { InventoryPage } from '../page/inventory-page';

test('Login con POM', {tag: '@regression'}, async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  await page.goto('https://www.saucedemo.com/');
  await loginPage.login('standard_user','secret_sauce');
  await inventoryPage.validar_products();
});

