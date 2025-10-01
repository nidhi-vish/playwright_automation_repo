const { test, expect } = require("@playwright/test");

test('jiraTaskCreation', async({page})=>{
    await page.goto("https://flatironhealth.atlassian.net/jira/software/c/projects/OTMR/boards/719");
    

})