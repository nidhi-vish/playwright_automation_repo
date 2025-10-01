const{test,expect}=require("@playwright/test")
test('test1',async({page})=>{

/*Problem 1 : Page Title Validation
Write a Playwright test that:

Launches the browser

Goes to https://example.com

Validates that the page title is "Example Domain"    */

    await page.goto("https://example.com");
    await expect(page).toHaveTitle("Example Domain");
    await expect(page.locator("//p[1]")).toContainText("This domain is for use in illustrative examples in documents.")


/*Problem 3: Conditional Checkbox Selection
Write a Playwright test that:

Opens https://testautomationpractice.blogspot.com/

Checks the boxes for Wednesday and Friday only if they are not already selected

Print which boxes were checked */

await page.goto("https://testautomationpractice.blogspot.com/")

const checkboxids=["//input[@id='wednesday']", "//input[@id='friday']"]
for (const i of checkboxids){
    const isChecked = await page.locator(i).isChecked()
    if(!isChecked){
        await page.locator(i).check();
    }
}

await page.waitForTimeout(5000);
})