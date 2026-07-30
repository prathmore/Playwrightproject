interface car{
    model:string,
    brand:string,
    display():void
}

interface carr{
    fuel:string
}

class Maruti implements car,carr
{
    model:string;
    brand:string;
    colour:string;
    fuel:string

    constructor(model:string,brand:string,colour:string,fuel:string)
    {
        this.model=model;
        this.brand=brand;
        this.colour=colour;
        this.fuel=fuel;
    }

    display():void
    {
        console.log(`${this.brand} with ${this.model} having ${this.colour} with fuel of ${this.fuel}`)
    }
    
}

let vehicle= new Maruti("suzuki","ertiga","white","E20 petrol+ cng")
vehicle.display();