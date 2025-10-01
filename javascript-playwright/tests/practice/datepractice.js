const date = new Date();
console.log(date)  // It will print date is UTC format  2025-08-19T13:17:24.868Z
console.log(date.toString()) // It will convert the date into human readable string in your system’s local timezoneTue Aug 19 2025 19:44:05 GMT+0530 (India Standard Time)

const dateinIST = date.toLocaleString('en-IN', {timezone:'Asia/Calcutta'})
console.log("Date in IST format", dateinIST)






/* check your system's timezone 
It will give some options, we can oull whatever we want like .timezone {
  locale: 'en-US',
  calendar: 'gregory',
  numberingSystem: 'latn',
  timeZone: 'Asia/Calcutta',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
}*/
console.log("System's timezone is ", Intl.DateTimeFormat().resolvedOptions()) 

