const { chromium } = require('playwright'); // Required for CLI execution
 
class TCCreation {
    constructor(page) {
        if (!page) throw new Error("Playwright page instance is required.");
        this.page = page;
    }
 
    async getTestCases(firstDay, lastDay) {
        if (!this.page) throw new Error("Page is not initialized.");
 
        await this.page.goto("https://flatiron.testmo.net/auth/login");
 
        await this.page.locator("//input[@placeholder='Email']").fill("arun.sankar@flatiron.com");
        await this.page.locator("//input[@placeholder='Password']").fill("Pitchai21199");
        await this.page.locator("//button[normalize-space()='Log in']").click();
        await this.page.waitForTimeout(3000);
 
        const projectIds = [5, 6, 7, 8, 9, 10];
 
        let grandTotal = 0;
        let creatorCounts = {};
 
        const formatDate = (date) => {
            const d = new Date(date);
            return `${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getDate().toString().padStart(2, '0')}/${d.getFullYear()}`;
        };
 
        const formattedStartDate = formatDate(firstDay);
        const formattedEndDate = formatDate(lastDay);
 
        for (const projectId of projectIds) {
            try {
                await this.page.goto(`https://flatiron.testmo.net/projects/view/${projectId}`);
                await this.page.locator("//span[normalize-space()='Repository']").click();
                await this.page.waitForTimeout(3000);
 
                const cancelFilterIcon = this.page.locator("//div[@data-action='click->repositories--index#doCancelFilter']//i[@class='far fa-times icon-dropdown-reset']");
                if (await cancelFilterIcon.isVisible()) {
                    await cancelFilterIcon.click();
                }
 
                await this.page.locator("//div[@data-action='click->repositories--index#doFilter']//i[@class='fas fa-caret-down icon-dropdown']").click();
                await this.page.locator("//label[normalize-space()='Created at']").click();
                await this.page.locator("//div[@data-name='repository_cases:created_at']//div//div//div[@data-controller='components--dropdown']//div//div//i").click();
                await this.page.locator("//div[@class='dropdown__items__row dropdown__items__row--item'][normalize-space()='Custom']").click();
 
                await this.page.waitForTimeout(2000);
                await this.page.locator("//div[@data-name='repository_cases:created_at']//input[@data-target='from']").click();
                await this.page.keyboard.type(formattedStartDate);
                await this.page.waitForTimeout(1000);
                await this.page.locator("//div[@data-name='repository_cases:created_at']//input[@data-target='to']").click();
                await this.page.keyboard.type(formattedEndDate);
                await this.page.locator("//button[normalize-space()='Apply']").click();
                await this.page.waitForTimeout(2000);
 
                const paginationElement = this.page.locator("button[data-action='click->components--pagination#doMenu']");
                const hasPagination = await paginationElement.count() > 0;
 
                if (hasPagination) {
                    await paginationElement.click();
                    await this.page.waitForTimeout(2000);
 
                    const paginationCountElement = this.page.locator("//div[contains(text(),'Rows: 25')]");
                    if (await paginationCountElement.count() > 0) {
                        await paginationCountElement.click();
                        await this.page.waitForTimeout(2000);
 
                        const pagecount250Element = this.page.locator("//div[@class='dropdown__items__row dropdown__items__row--item' and @data-value='250']");
                        if (await pagecount250Element.count() > 0) {
                            await pagecount250Element.click();
                            await this.page.waitForTimeout(3000);
                        }
                    }
                }
 
                let hasNextPage = true;
 
                while (hasNextPage) {
                    const testCases = await this.page.locator('(//tbody/tr/td[2]/div[2]/a)').all();
                    const creators = await this.page.locator('//td[@class="table__field__avatar-text"][position() = 1]').all();
 
                    for (let i = 0; i < testCases.length; i++) {
                        grandTotal++;
                        let creatorName = 'N/A';
                        if (i < creators.length) {
                            const creatorText = await creators[i].innerText().catch(() => 'N/A');
                            if (creatorText && creatorText.trim()) {
                                creatorName = creatorText.trim();
                            }
                        }
                        creatorCounts[creatorName] = (creatorCounts[creatorName] || 0) + 1;
                    }
 
                    if (hasPagination) {
                        const nextButton = this.page.locator('button[data-action="click->components--pagination#doNextPage"]');
                        await this.page.waitForTimeout(2000);
 
                        if (await nextButton.count() > 0) {
                            const isDisabled = await nextButton.getAttribute('disabled') !== null;
                            if (!isDisabled) {
                                await nextButton.click();
                                await this.page.waitForTimeout(3000);
                                continue;
                            }
                        }
                    }
 
                    hasNextPage = false;
                }
 
            } catch (error) {
                console.error(`Error processing project ${projectId}:`, error);
            }
        }
 
        return {
            creatorCounts,
            totalTestCases: grandTotal
        };
    }
}
 
// ✅ CLI Execution Block
if (require.main === module) {
    (async () => {
        const browser = await chromium.launch({ headless: false }); // Set to true for automation
        const context = await browser.newContext();
        const page = await context.newPage();
 
        const firstDay = process.argv[2] || '2025-06-01';
        const lastDay = process.argv[3] || '2025-06-30';
 
        const defectCounter = new TCCreation(page);
        const result = await defectCounter.getTestCases(firstDay, lastDay);
 
        console.log(`\n✅ Total Test Cases Created: ${result.totalTestCases}`);
        console.log('📊 Creator-wise Breakdown:');
        console.table(result.creatorCounts);
 
        await browser.close();
    })();
}
 
module.exports = TCCreation;