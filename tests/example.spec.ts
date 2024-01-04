import { test, expect } from '@playwright/test';

const SEARCH_BAR :"//input[@id='searchField1']" = '//input[@id=\'searchField1\']';
const ANIMAL :"Animal Blood Groups and Biochemical Genetics" = "Animal Blood Groups and Biochemical Genetics";

test('has title', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Wiley Online Library | Scientific research articles, journals, books, and reference works/), {setTimeout: 50000};

  await page.locator(SEARCH_BAR).fill(ANIMAL), {setTimeout: 1000000};

  await page.keyboard.press('Enter'), {setTimeout: 100000};
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
