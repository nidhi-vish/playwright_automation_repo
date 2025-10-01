const {test,expect} = require('@playwright/test');
const { LoginPage } =require('../pages/loginPage');

test('Homepage', async({page})=>{

// Go to Patch Url and validate title
    const login = new LoginPage(page)
    await login.gotoLoginPage();
    const pageTitle = await page.title()
    console.log("Page title is : ", pageTitle)
    await expect(page).toHaveTitle("Login");
    

// Validate URL

    const pageURL =page.url;
    console.log("url is :", pageURL);

// Login process
    await login.login("nidhi.vishwakarma+120@flatiron.com","Flatiron1!" );
    await expect(page).toHaveTitle("Select Practice");

//Practice selection
    await login.practiceSelection("Karthikeyan Oncology");

//Location selection 
   await login.locationSelection('American-Islamic Medical Centre');


// Wait for Visit List page to load
    await page.waitForLoadState('networkidle')
    await expect(page).toHaveTitle("Visit List - OncoEMR®"); 
    const visitListTitle = await page.title()
    console.log("title" , visitListTitle)


// Validate Logout Button
    const logoutLink = page.locator(login.logoutButton);
    const isTrue =  await logoutLink.isVisible(); 
    console.log("Logout link:" , isTrue)

//Get list of all left menu links

const leftMenu = await login.listOfLeftMenuBar();
console.log(leftMenu);

})
