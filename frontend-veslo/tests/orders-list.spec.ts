import { test, expect } from '@playwright/test';

test('create delete orders list', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('название').click();
  await page.getByPlaceholder('название').fill('fourth');
  await page.getByPlaceholder('описание').click();
  await page.getByPlaceholder('описание').fill('some desc');
  await page.getByRole('button', { name: 'Добавить заявку' }).click();
});
