class Employee
{
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;
    }
}

Employee.prototype.designation = "SE";
Employee.prototype.display=function()
{
    console.log(this.eid,this.ename,this.designation)
}

e1=new Employee("1","Nidhi");
//console.log(e1.eid,e1.ename,e1.designation);    // we can add method also by using prorotype. 
e1.display()

e2=new Employee ('2',"Vidhi")
e2.display();