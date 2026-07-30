
class Employee{
    static empid:number;
    static empname: string;

    constructor(empid:number,empname:string){
        Employee.empid=empid;
        Employee.empname=empname;

    }

    static getdetails()
    {
        console.log(`Employee details are ${Employee.empid} , ${Employee.empname}`)
    }

}

let emp1=new Employee(5311,"Prathamesh More");
Employee.getdetails()