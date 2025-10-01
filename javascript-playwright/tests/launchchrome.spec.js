const { test,chromium } = require("@playwright/test")

test('test chrome launch', async () => {
    const browser = await chromium.launch();
    // Your test code here
})
