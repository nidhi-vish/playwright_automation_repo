const {test, expect}=require("@playwright/test")
const path = require('path')                              // Import Node's path module
//Upload single file
test("singlefileupload", async({page})=>{

    const filename= "testfile1.pdf"
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.locator("#filesToUpload").setInputFiles(`testdata/${filename}`)
    await expect(page.locator("#fileList")).toHaveText(filename);
    await page.waitForTimeout(5000)
})
//Upload multiple files
test.only("multiplefileupload",async({page})=>{
    const pathoffiles =["testdata/testfile1.pdf", "testdata/testfile2.doc"]

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.locator("#filesToUpload").setInputFiles(pathoffiles);
    await page.waitForTimeout(3000);
    for (let i = 0; i < pathoffiles.length; i++) {
    const fileName = path.basename(pathoffiles[i]);
    await expect(page.locator(`#fileList li:nth-child(${i + 1})`)).toHaveText(fileName);
    }
    await page.waitForTimeout(5000)

  //Removing thr files

   await page.locator("#filesToUpload").setInputFiles([]);
   await page.waitForTimeout(3000)
   await expect(page.locator("#fileList li:nth-child(1)")).toHaveText("No Files Selected");






})
