const {test, expect} = require("@playwright/test")
test('multiselect drop down validation', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Selecting options
    //await page. locator("//select[@id='colors']").selectOption('Green','Red')
    //await page.selectOption("//select[@id='colors']",'Green','Red' )     // this is another way of writing

    //Assertions 

    //1. check total count  - Approach 1
    // const totalValues = await page.locator("//select[@id='colors']/option")   
    // await expect(totalValues).toHaveCount(7);


    //2. Using JS array
    // const totalValues = await page.$$("//select[@id='colors']/option")
    // await expect(totalValues.length).toBe(7)

    //3. To check if specific value is presentor not
    const value = await page.locator("//select[@id='colors']").textContent();
    await expect(value.includes('Yellow')).toBeTruthy()


    await page.waitForTimeout(5000);
    

})