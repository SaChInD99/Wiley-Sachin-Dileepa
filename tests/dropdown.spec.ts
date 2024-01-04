import { test, expect } from '@playwright/test';

const SEARCH_BAR :"//input[@id='searchField1']" = '//input[@id=\'searchField1\']';
const ADVANCEDSEARCH :"//div[@class=\"advanced-search-link-wrapper\"]//a" = "//div[@class=\"advanced-search-link-wrapper\"]//a"
const ANIMAL :"Animal Blood Groups and Biochemical Genetics" = "Animal Blood Groups and Biochemical Genetics";

test('has title', async ({ page }) => {
    await page.goto('https://onlinelibrary.wiley.com/action/showPublications');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Browse Publications - Wiley Online Library/), {setTimeout: 50000};

    await page.evaluate(() => {
        window.scrollBy(0, 50), {setTimeout: 150000};
    });

    await page.locator("#alphabetRange").selectOption({label:"A"}), {setTimeout: 150000}

    await  page.waitForTimeout(1000)

    await page.locator("#alphabetRange").selectOption({label:"B"});
});