const {test,expect} = require("@playwright/test")
test("checkboxValidation", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //Single assertion
    await page.getByLabel("Monday").check();
    

    //assertions 
    expect(await page.getByLabel("Monday").isChecked()).toBeTruthy()
    expect(await page.getByLabel("Tuesday").isChecked()).toBeFalsy()


    //Multiple assertions
    const checkboxLocators = ["Wednesday", "Friday"]
    for (const l1 of checkboxLocators)
    {
        const checkbox = page.getByLabel(l1);
        const isChecked = await checkbox.isChecked()
        if( !isChecked)
        {
            console.log(`${l1} is not selected, slecting now`)
            await checkbox.check()
        }
        else{
            console.log (`${l1} is already selected. Skipping.`)
        }
    }
    await page.waitForTimeout(5000);
})