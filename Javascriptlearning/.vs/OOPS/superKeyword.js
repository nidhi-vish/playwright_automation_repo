class Animal
{
    constructor(color)
    {
        this.cl=color;
    }

}

class Dog extends Animal
{
    constructor(color,food)
    {
        super(color);
        this.fd=food;
    }

    display()
    {
        console.log("color of dog is", this.cl);
        console.log("food of dog is", this.fd)
    }


}
d= new Dog("Red","A");
d.display();