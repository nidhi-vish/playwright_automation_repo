const {test,expect} = require("@playwright/test");
test.skip("normal alert", async({page})=>{
    page.goto(' https://testautomationpractice.blogspot.com/')

    //Dialog window  handler
     page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box');
        await dialog.accept();
     })
     await page.click("//button[@id='alertBtn']")
     await page.waitForTimeout(5000);

})

test.skip("Confirm dialog", async({page})=>{
   page.goto(' https://testautomationpractice.blogspot.com/')

   page.on('dialog', async dialog=>{
      expect(dialog.type()).toContain('confirm');
      expect(dialog.message()).toContain("Press a button!");
      await dialog.accept();
      //await dialog.dismiss()
   })

     await page.click("//button[@id='confirmBtn']")
     expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");
     await page.waitForTimeout(5000);

})

test("Promp dialog", async({page})=>{

   await page.goto(' https://testautomationpractice.blogspot.com/')

   const name = "Nidhi"

   page.on('dialog',async dialog=>{
      expect(dialog.type()).toContain("prompt")
      expect(dialog.message()).toContain("Please enter your name:");
      expect(dialog.defaultValue()).toContain("Harry Potter");
      dialog.accept(name);
   })

   await page.click("//button[@id='promptBtn']")
   await expect(page.locator("//p[@id='demo']")).toHaveText(`Hello ${name}! How are you today?`)
   await page.waitForTimeout(5000);

})
