import { test, expect } from '@playwright/test';

//const RESOURCES :"//input[@id='searchField1']" = '//input[@id=\'searchField1\']';
const BROWSE :"//div[@class='col-md-12 featured-container--btn']//a" = '//div[@class=\'col-md-12 featured-container--btn\']//a';
const BROWSETITELS :"Browse All Titles" = "Browse All Titles";
test('has title', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Wiley Online Library | Scientific research articles, journals, books, and reference works/), {setTimeout: 50000};

  await expect(page).toHaveText(/Browse All Titles/);

  //await page.locator(SEARCH_BAR).fill(ANIMAL), {setTimeout: 1000000};

  //await page.keyboard.press('Enter'), {setTimeout: 100000};
});