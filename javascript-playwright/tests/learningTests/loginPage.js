const{test, expect} = require("@playwright/test");
const { text } = require("stream/consumers");
exports.LoginPage=

class LoginPage{

    constructor(page){
        this.page=page;
        this.emailInput = "id=Email";
        this.passwordInput = "id=Password";
        this.loginButton = "id=login-button";
        this.logoutButton = "//span[text()='Log out']"
        this.leftmenuBar = "//div[@class='atrium-group']//a"

    }
    //Load the url
    async gotoLoginPage(){
        await this.page.goto("https://patch.oncoemr.com/");
        await this.page.waitForLoadState('load')
    }
    //Login Process
    async login(email, password){
        await this.page.locator(this.emailInput).fill(email);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
    // Get dynamic locator for practice
    getPracticeCard(practiceName){
        return this.page.locator(`//div[contains(text(),"${practiceName}")]`)
    }

    // Practice selection
    async practiceSelection(practiceName){
        const locatorPrcaticeName = this.getPracticeCard(practiceName)
        await locatorPrcaticeName.click();
    }

    //get dynamic locator for location 
    getLocationCard(locationName){
        return this.page.locator(`//div[contains(text(), '${locationName}')]`);
    }

    //Location selection
    async locationSelection(locationName){
        const locatorLocationName = this.getLocationCard(locationName);
        await locatorLocationName.waitFor({ timeout: 120000 }); // Wait for element to be visible
        await locatorLocationName.click();
    }

    //Logout process
    async logout(){
        await this.page.locator(this.logoutButton).click()
    }

    //Get list of all left menu links
    async listOfLeftMenuBar(){
    const all_links =await this.page.$$(this.leftmenuBar);
    const text = [];
    for(const link of all_links)
        {
            const link_text = await link.textContent();      // textcontent is used to conver link text to text
            text.push(link_text)
        }
        return text;
    }

    }

