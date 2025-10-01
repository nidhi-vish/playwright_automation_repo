const {test, expect} = require("@playwright/test");
const { stat } = require("fs");
test("dropDownValidation", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //There are below 4 ways of selecting option in drop down. Mostly first is being used

    //await page.getByLabel("Country:").selectOption("Canada")     //using text 
    //await page.getByLabel("Country:").selectOption({label : "Germany"})   //using lael(visible text)
    //await page.getByLabel("Country:").selectOption({value : "france"})    //using value
    //await page.getByLabel("Country:").selectOption({index :9})       //Using index number. First option is zero


    //ASSERTIONS

    // 1. validate total number of  options   - APPROACH 1
    // const totalOptions = await page.locator("//select[@id='country']/option");
    // await expect(totalOptions).toHaveCount(10);

    // 2. validate total number 0f options   - APPROACH 2
    /*const totalOptions = await page.$$("//select[@id='country']/option")  // $$ will create array of all the options
    console.log("Total Options are :", totalOptions.length)
    const availableOptions =[]
    for(const O1 of totalOptions){
        const countryName =await O1.textContent();      //  includes extra spaces and newlines from the HTML
        availableOptions.push(countryName.trim());      //To fix that and make your output clean and single-line, just add .trim()
    }
    console.log("These are the avaialble options in dropdown: ", availableOptions.join(','));
    await expect(totalOptions.length).toBe(10);*/
    
    // 3. validate if specific option is present or not  - APPROACH 1
    // const options = await page.locator("//select[@id='country']").textContent()
    // console.log(options)
    // await expect(options.includes('Canada')).toBeTruthy();

    // 4. validate if specific option is present or not  - APPROACH 2 by using looping
    const totalOptions = await page.$$("//select[@id='country']/option")  
    let status = false;
    for(const o1 of totalOptions){
        //console.log(await O1.textContent())
        const value =await o1.textContent();
        if(value.includes('France')){
            status =true;
            break;
        }
    }
    await expect(status).toBeTruthy();
    await page.waitForTimeout(5000);

})