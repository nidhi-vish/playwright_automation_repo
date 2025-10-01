class Student                       // Class
{
    constructor()                    //constructor 1  without parameter
    {
        this.id = 1;
        this.name = "NidhiJulie";
        this.grade = "A"
    }

    display()                      //Method 2
    {
        console.log("id is =" +this.id, this.name, this.grade)
    }



}

let stu = new Student();     // Object creation. Constructor will be invoked automatically
stu.display();

class Animal
{
    constructor(a,b,c)       //Method with parameter
    { 
        this.name=a;
        this.legs=b;
        this.color=c;

    }

    displayanimaldetails()
    {
        console.log(this.name, this.legs, this.color);
    }
}

let x = new Animal("monkey", 4, "cement")
x.displayanimaldetails()