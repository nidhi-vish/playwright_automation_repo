// we need to use keywork let to define object

let person=                   // object name
{
    height:10,                //propety name and value separated by :
    weight:20,                // Each property needs to be separated by comma
    name:'nidhi',
    color:'whitish',
    basicsal:1000,
    bonus : function()       // method
    {
        return ((this.basicsal*10)/100);
    }

    
};                             // object should end with ;


//Access method inside the object
console.log("bonus is"+ person.bonus())

// // Access the properties of any object 
// console.log(person["height"]);                          // o/p 10
// console.log(person.height);

// // Adding new pproperty
// person['race']='indian';
// person.race='indian'
// console.log(person.race);

// //updating existing perperty
// person.race='American'
// console.log(person.race);

// //Removing perperty
// delete person.color;
// console.log(person.color);                                        // o/p undefined


// //for/in loop
// for(let x in person)
// {
//     console.log(x);                                              //prints all the property name
//     console.log(person[x]);                                      //prints all the values
//     console.log(x +" "+person[x]);                                   
// }
