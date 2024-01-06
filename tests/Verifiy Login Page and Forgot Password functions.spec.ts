import { test, expect } from '@playwright/test';


const LOGIN :"//div[@class='pull-right']//a" = "//div[@class='pull-right']//a";
const EMAIL :"//input[@name='login']" = "//input[@name='login']";
const PASSWORD :"//input[@name='password']" = "//input[@name='password']";
const SUBMIT :"//div[@class='align-end']//span" = "//div[@class='align-end']//span";
const FORGOTEMAIL :"//input[@class='email last-tab-item']" = "//input[@class='email last-tab-item']";
const FORGOTCLOSE :"//div[@class='email last-tab-item']" = "//div[@class='email last-tab-item']";

test('Verifiy Login Page and Forgot Password functions', async ({ page }) => {
    await page.goto('https://onlinelibrary.wiley.com/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Wiley Online Library | Scientific research articles, journals, books, and reference works/);

    await page.evaluate(() => {
        window.scrollBy(0, 50);
    });
    
    // Click the login register link
    await page.locator(LOGIN).click();

    // fill the Email
    await page.locator(EMAIL).fill("Admin");
    
    //Fill the password text box
    await page.locator(PASSWORD).fill("Admin123");
    
    // Clear the Email Field
    await page.locator(EMAIL).clear();
    
    // cheking the email field with numeric values
    await page.locator(EMAIL).fill("24351");
 
    // Clear Email Field
    await page.locator(EMAIL).clear();
    
    //Checking Numeric and Alphatiical Characters
    await page.locator(EMAIL).fill("24351DS");

    await  page.waitForTimeout(3000)
    
    // Checking the Forgot Password Link
    await expect(page.getByRole('link', { name: 'Forgot password?' })).toBeVisible();
    
    //Click the Forgot Password link
    await page.getByRole('link', { name: 'Forgot password?' }).click();
    
    //Checking the Forgot your password heading
    await expect(page.getByRole('heading', { name: 'Forgot your password?' })).toBeVisible();
    
    //Fill the email field
    await page.locator(FORGOTEMAIL).fill("sachindileepa41@gmail.com");

    await  page.waitForTimeout(3000);

    await page.close();

    //Couldn't automate the Click buttons because it always redirect to not a robot verification page
    //await page.locator(SUBMIT).click();


});

//In this script mainly focused on Login and Register functions
//first verify the title of the page and then click the login and register link
//And fill the email as Admin and password as Admin123 and verify that we can input values into those fields
//and the clear the email field and tested it with numeric characters
//Then checked that the forgot password link is visible on the page and click the link
//check the forgot password heading
//and check the email text field by typing email