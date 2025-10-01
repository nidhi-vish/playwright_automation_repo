let fruits = ["Banana", "Orange", "Apple", "Mango"];

//toString() & join()

console.log(fruits.toString());                   //Banana,Orange,Apple,Mango
console.log(fruits.join("#"));                    //Banana#Orange#Apple#Mango

//pop() - Remove last element from array
console.log(fruits.pop());                         //Mango
console.log(fruits)                                //[ 'Banana', 'Orange', 'Apple' ]

//push() ---Adding element to the end , also returning the length of array 

console.log(fruits.push("papaya"));                 // 4
console.log(fruits);                                //[ 'Banana', 'Orange', 'Apple', 'papaya' ]

//shift() - Remove first array element and shift the other elements to lower index. It will return the rest of the elemnts of the array

console.log(fruits.shift());                          //Banana
console.log(fruits);                                 //[ 'Orange', 'Apple', 'papaya' ]

//unshift() - Add new element to the begining of array and shift other elements to the higher index. It will rturn length of array

console.log(fruits.unshift("lemon"));                 //4
console.log(fruits);                                 //[ 'lemon', 'Orange', 'Apple', 'papaya' ]


//delete()

delete fruits[2];
console.log(fruits);                                 //[ 'lemon', 'Orange', <1 empty item>, 'papaya' ]

//concat()

let veg1 = ["Potato", "Tomato"];
let veg2 = ["Chilli", 'Beans', "coriander"]
let veg3 = ["Cabbage", "Bitterguard"]

console.log(veg1.concat(veg2));                         // [ 'Potato', 'Tomato', 'Chilli', 'Beans', 'coriander' ]
console.log(veg1.concat(veg2, veg3));                   // [ 'Potato', 'Tomato', 'Chilli', 'Beans', 'coriander',"Cabbage", "Bitterguard"]

//slice()

let veg = [ 'Potato', 'Tomato', 'Chilli', 'Beans', 'coriander',"Cabbage", "Bitterguard"];
console.log(veg.slice(3));                            // [ 'Beans', 'coriander', 'Cabbage', 'Bitterguard' ]

//sort()

console.log(veg.sort());                              // ['Beans','Bitterguard','Cabbage','Chilli','Potato','Tomato','coriander']  
console.log(veg);

//reverse()

console.log(veg.reverse());






 


