const {test, expect} = require("@playwright/test")
test('multiselect drop down validation', async({page})=>{

    await page.goto("https://www.redbus.in/");
    await page.locator("//div[text() ='From']").click()
    await page.getByRole('textbox', { name: 'From' }).fill('Delhi');

    await page.waitForTimeout(2000)
    const suggestions = await page.$$('//div[@class="suggestionsWrapper___d2b869"]');
    for (let i of suggestions){
        const suggestions_text = await i.textContent()
        console.log(suggestions_text);
    }
    await page.screenshot({path:"test-results/screenshots"+Date.now()+"suggestiosn.png", fullPage:true})



    await page.waitForTimeout(5000);


})