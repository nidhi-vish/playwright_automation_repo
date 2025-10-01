const {test,expect} = require("@playwright/test");
let page;
//Login 
test.beforeEach(async({browser})=>{
    page = await browser.newPage();
    await page.goto("https://demoblaze.com/");
    await page.click("#login2");
    await page.waitForTimeout(3000)
    await page.fill("#loginusername", "vishwakarmanidhi1992@gmail.com");
    await page.fill("#loginpassword", "demotest123");
    await page.click("//button[text()='Log in']")

})

//Logout
test.afterEach(async()=>{
    await page.click("#logout2");
})

test("Homepage", async()=>{
    const totalproducts = await page.$$(".hrefch");
    await expect(totalproducts).toHaveLength(9);
})

test("Add product", async()=>{
    await page.click("//a[contains(text(), 'Samsung galaxy s6')]")
})


