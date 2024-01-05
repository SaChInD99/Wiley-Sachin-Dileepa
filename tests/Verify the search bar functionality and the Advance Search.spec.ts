import { test, expect } from '@playwright/test';

const SEARCH_BAR :"//input[@id='searchField1']" = '//input[@id=\'searchField1\']';
const ADVANCEDSEARCH :"//div[@class=\"advanced-search-link-wrapper\"]//a" = "//div[@class=\"advanced-search-link-wrapper\"]//a"
const ANIMAL :"Animal Blood Groups and Biochemical Genetics" = "Animal Blood Groups and Biochemical Genetics";
const FISH :"Shark" = "Shark";


test('Verify the search bar functionality and the Advance Search', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Wiley Online Library | Scientific research articles, journals, books, and reference works/), {setTimeout: 50000};
  
  //Type in search bar
  await page.locator(SEARCH_BAR).fill(ANIMAL), {setTimeout: 1000000};
  
  // Clear the search field
  await page.locator(SEARCH_BAR).clear();
  
  //Fill the search bar 
  await page.locator(SEARCH_BAR).fill(FISH), {setTimeout: 1000000};
  
  // Checking the Resource Heading
  await expect(page.getByRole('heading', { name: 'Resources' })).toBeVisible();

  await  page.waitForTimeout(3000)
 
  // Click the Advance Search
  await page.locator(ADVANCEDSEARCH).click();

  await page.close();

});

  //In this script first i checked the title of the page is correct. and then started to test the functionality of the Search Bar.
  // first i test search field entering Animal as the input
  //then clear the field and enter Fish as the input
  //then check the Resource Heading and verify it's visible
  //after that click the Advance Search link and redirect to advance search page

