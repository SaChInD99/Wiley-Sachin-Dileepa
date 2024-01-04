import { test, expect, Locator } from '@playwright/test';



//const RESOURCES :"//input[@id='searchField1']" = '//input[@id=\'searchField1\']';
const BROWSE :"//div[@class='col-md-12 featured-container--btn']//a" = '//div[@class=\'col-md-12 featured-container--btn\']//a';
const BROWSETITLES :"Browse All Titles" = "Browse All Titles";
const RESOURCES :"//div[@class=\"collapsible-menu list--bordered-left\"]//button" = "//div[@class=\"collapsible-menu list--bordered-left\"]//button";
const SUBJECT :"//div[@class=\"accordion-with-arrow large\"]//h2" = "//div[@class=\"accordion-with-arrow large\"]//h2";
const accordion :"//div[@class=\"accordion\"]" = "//div[@class=\"accordion\"]";
test('has title', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Wiley Online Library | Scientific research articles, journals, books, and reference works/), {setTimeout: 5000};

  await page.evaluate(() => {
    window.scrollBy(0, 50), {setTimeout: 150000};
  });

  await expect(page.locator(RESOURCES).first()).toHaveText("Researchers", ), {setTimeout: 150000};

  await expect(page.getByRole('heading', { name: 'Subjects' })).toBeVisible();



  //await expect(page.locator(RESOURCES)

  //await page.getByRole('link', { name: 'Browse All Titles' }).click();

  //await page.locator(SEARCH_BAR).fill(ANIMAL), {setTimeout: 1000000};

  //await page.keyboard.press('Enter'), {setTimeout: 100000};
});