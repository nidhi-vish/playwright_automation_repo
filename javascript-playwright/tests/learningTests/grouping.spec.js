import {test, expect} from "@playwright/test";

test.beforeAll(async()=>{
    console.log("this is before all test")
})

test.afterAll(async()=>{
    console.log("this is after all test")
})

test.beforeEach(async()=>{
    console.log("this is before each")
})

test.afterEach(async()=>{
    console.log("this is after each")
})

test.describe("Smoke tests",()=>{
    test("test1", async({page})=>{
        console.log("this is test1");

    })

    test("test2", async({page})=>{
        console.log("this is test2");

    })
} )
test.describe("Functional tests", ()=>{
    test("test3", async({page})=>{
        console.log("this is test3")

    })
    test("test4", async({page})=>{
        console.log("this is test4");
    })
})