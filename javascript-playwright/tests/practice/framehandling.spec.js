const{test,expect}=require("@playwright/test")
test("framehandling", async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    //find total number of frames on page
    const allframes=await page.frames();
    console.log("Total frames : ", allframes.length)

    //Handle frame using Frame object which uses either name or url - approach 1
    const frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    await frame1.fill("input[name='mytext1']", "Hello");

    //Handle frame using framelocator - approach 2
    const frmam2 =await page.frameLocator("frame[src='frame_2.html']").locator("input[name='mytext2']")  // framelocatory only accept CSSselector, no xpath 
    await frmam2.fill("Hello 2");


    //Handle nested frames

    const frame3=await page.frame({url : "https://ui.vision/demo/webtest/frames/frame_3.html"});
    const list_of_all_nested_frames = await frame3.childFrames();
    for (const frame of list_of_all_nested_frames) {
    console.log("Frame URL:", frame.url());
    }
    await list_of_all_nested_frames[0].locator("//div[@id='i9']/div/div").check()
    await page.waitForTimeout(3000);




    


})