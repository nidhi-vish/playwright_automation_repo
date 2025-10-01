function student(name,gender)
{
    this.name='Nidhi',
    this.gender='Female';
}

// stu1=new student()
// stu1.age=35;
// console.log(stu1.name, stu1.gender,stu1.age)

// stu2=new student()
// console.log(stu2.name, stu2.gender,stu2.age)  //Here age is not defined for stu2 object. so we can create prototype 


student.prototype.age=35;

stu1=new student();
console.log(stu1.name, stu1.gender,stu1.age) 

stu2=new student()
console.log(stu2.name, stu2.gender,stu2.age)


