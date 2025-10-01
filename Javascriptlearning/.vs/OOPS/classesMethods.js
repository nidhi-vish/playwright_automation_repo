class Student                       // Class
{
    setDetails()                    //Method 1  without parameter
    {
        this.id = 1;
        this.name = "Nidhi";
        this.grade = "A"
    }

    display()                      //Method 2
    {
        console.log("id is =" +this.id, this.name, this.grade)
    }



}

let stu = new Student();     // Object creation . To create object we need to create a variable which is stu here
stu.setDetails();           // Through this object only, we can access the methods inside the class. 
stu.display();

class Animal
{
    characteristic(a,b,c)       //Method with parameter
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

let x = new Animal
x.characteristic("monkey", 4, "cement");
x.displayanimaldetails()