let fruits=['Mango','Banana',10,10.5,true]                             // Creating an array
let cars=new Array('BMW','Honda')                                      //another way of creating array

console.log(cars);                         // [ 'BMW', 'Honda' ] ---accessing array

cars[0]='maruti'                           // Updating/adding element to array
console.log(cars);                         // [ 'maruti', 'Honda' ]


// Adding objects to the array

let mountain={                                          // first object
    name:'himalkaya',
    height:'6.8'

};
let peaks={                                             // second object
    place:'jabp',
    color:'pink'
};

let rangeofmoutanin=[mountain,peaks];                   //creating array of objects
//console.log(rangeofmoutanin);                         // [{ name: 'himalkaya', height: '6.8' },{ place: 'jabp', color: 'pink' }]

// FOR/Of loop ----sepcially designed for arrays
for (x of rangeofmoutanin)
{
    console.log(x);

}


console.log(rangeofmoutanin.length)                     // To find the length of an array

console.log(typeof rangeofmoutanin);                     //object
console.log(Array.isArray(rangeofmoutanin));              //true
    


