class car{
    modelname:string
    BrandName:string
    fueltype:string

    
    constructor(modelname:string,BrandName:string,fueltype:string)
    {
        this.modelname=modelname;
        this.BrandName=BrandName;
        this.fueltype=fueltype
    }

    display()
    {
        console.log(`car model is ${this.modelname} of brand ${this.BrandName} with fueltype ${this.fueltype}`)
    }
}

class Maruti extends car
{
    newlaunchcar:string

    constructor(modelname:string,BrandName:string,fueltype:string,newlaunchcar:string)
    {
        super(modelname,BrandName,fueltype)
        this.newlaunchcar=newlaunchcar
    }

    override display()
    {
        console.log(`new launch car is ${this.newlaunchcar} car model is ${this.modelname} of brand ${this.BrandName} with fueltype ${this.fueltype}`)
    }
}

let suzuki= new Maruti("Ertiga","Maruti Suzuki","CNG","ZXI CNG 2026")
 suzuki.display();