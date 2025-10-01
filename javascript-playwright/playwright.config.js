// @ts-check
const { defineConfig, devices } = require('@playwright/test');
 
const config = defineConfig({
testDir: './tests',  // To run the entire regression
// testDir: './src/common/', // To run only the smoke test
 
// Maximum time one test can run  
timeout: 1000 * 10000,
expect: {
  timeout: 50000
},
 
reporter: [['list']],
 
// Configure parallel execution
workers: 1, // Set the number of workers to 4 for running tests in parallel
 
use: {
  browserName: 'chromium',
  ignoreHTTPSErrors: true, // SSL certificate syntax
  headless: false,
  viewport: { width: 1280, height: 720 },
  screenshot: 'off', // Take screenshots only for failed tests
  video: "off", // Uncomment to record videos of failed tests
  trace: 'off' // Uncomment to enable tracing
},
});
module.exports = config;

