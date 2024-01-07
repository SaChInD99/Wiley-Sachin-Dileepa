import { test, expect, Locator } from '@playwright/test';

const REGISTEREMAIL :"//input[@id='login.email']" = '//input[@id=\'login.email\']';
const RETYPEEMAIL :"//input[@id='login.email2']" = '//input[@id=\'login.email2\']';
const REGISTERPASSWORD :"//input[@id='login.password']" = '//input[@id=\'login.password\']';
const RETYPEPASSWORD :"//input[@id='login.password2']" = '//input[@id=\'login.password2\']';
const FIRSTNAME :"//input[@id='personal.givenNames']" = '//input[@id=\'personal.givenNames\']';
const DROP :"//section[@class='taxonomies']" = "//section[@class='taxonomies']";
const LASTNAME :"//input[@id='personal.surname']" = '//input[@id=\'personal.surname\']';
const DROPDOWN1 :"//select[@id='taxonomy[0].values']" = "//select[@id='taxonomy[0].values']";
const DROPDOWN2 :"//select[@id='taxonomy[1].values']" = "//select[@id='taxonomy[1].values']";
const TIKBOX :"//fieldset[@class='registration-fieldset']" = "//fieldset[@class='registration-fieldset']";


test('Verify all the Text fields and dropdowns in the Registeration form', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/action/registration/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Register for a new account/), {setTimeout: 50};
  
  //scroll down the page
  await page.evaluate(() => {
    window.scrollBy(0, 50), {setTimeout: 1500};
  });

  //verift the heading register
  await expect(page.getByRole('heading', { name: 'Register' })).toBeVisible();

  //Fill the Email
  await page.locator(REGISTEREMAIL).fill("user@wiley.com");
  
  //Fill the retype email
  await page.locator(RETYPEEMAIL).fill("user@wiley.com");
  
  //Fill the password
  await page.locator(REGISTERPASSWORD).fill("WILEY123");
  
  //Fill the retype password
  await page.locator(RETYPEPASSWORD).fill("WILEY123");

  //Scrolling
  await page.evaluate(() => {
    window.scrollBy(0, 200);
});
  
  //Fill the firt name text field
  await page.locator(FIRSTNAME).fill("Kumar");

  //Fill the lastname tect field
  await page.locator(LASTNAME).fill("Sangakkara");

  //scrolling
  await page.evaluate(() => {
    window.scrollBy(0, 200);
});

 //Click the country. location dropdown
  await page.locator(DROPDOWN1).click();

  //HOVER
  await page.locator(DROP).hover();


  //Click area of interest dropdown
  await page.locator(DROPDOWN2).click();

   
  await page.close();

});

//In this script first i go to wiley new user registeration page
//then i verify the expected page title and verify the "Register" heading
//Then fill all the email text fields and the password fields
//then fill the firstname and lastname fields and verify the user can type characters
//then click the country. location dropdown and verify it's work
//then click the area of interest  dropdown and verify it