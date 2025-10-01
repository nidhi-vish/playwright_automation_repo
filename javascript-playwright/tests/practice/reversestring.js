   
   // Using loop 
   let input = "playwright";
    let reversedstring = ""
    for (i=(input.length)-1; i>=0; i-- ){
        reversedstring+=input[i]
    }
    console.log("Using loop: ",  reversedstring)

    // Using split(), reverse(), and join()
    let reversedstringusingsplit = input.split('').reverse().join('')
    console.log(reversedstringusingsplit)

    //Using Array spread (...)==> Spread ... is used in JavaScript to expand an iterable (like string, array, object) into individual elements
    let reversedusingarrayspread = [...input].reverse().join('');
    console.log("Using spread", reversedusingarrayspread)
