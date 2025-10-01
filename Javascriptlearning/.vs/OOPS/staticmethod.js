class Student {
    static setDetails() {
        Student.id = 1;
        Student.name1 = "Nidhi";
        Student.grade = "A";
    }

    display() {
        console.log("id is =", Student.id, Student.name1, Student.grade);  // Access static properties using class name
    }
}

Student.setDetails();
let stu = new Student();      
stu.display();  // Output: id is = 1 Nidhi A

