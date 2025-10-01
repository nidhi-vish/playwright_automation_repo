class Student
{
    constructor()
    {
        let name,marks;                      //Private variables
    }

    getName()                                 //Getter method
    {
        return this.name;
    }
    setName(name)                             //Setter method
    {
        this.name = name;

    }

    getMarks()                                 //Getter method
    {
        return this.marks;
    }
    setMarks(marks)                             //Setter method
    {
        this.marks = marks;

    }

}

let stu = new Student
stu.setName("Nidhi")
stu.setMarks(80)
console.log(stu.getName(), stu.getMarks());
