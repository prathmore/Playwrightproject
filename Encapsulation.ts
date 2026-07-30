class bank{
     balance:number;
    private customer:string;
    constructor(balance:number,customer:string)
    {
        this.balance=balance;
        this.customer=customer;
    }
    
    getbalance()
    {
        console.log(`${this.customer} has balance of Rs ${this.balance}`);
    }

    getdeposit (amount:number)
    {
        if (amount>=0)
        {
            this.balance=this.balance+amount;
            console.log(`updated balance is Rs ${this.balance}`)
        }

            else
                {

                console.log("zero balance in account")

            }
            

         
    }
}

let custaccount:bank= new bank(5000,"Prathamesh More")
custaccount.getbalance();
custaccount.getdeposit(1000);
custaccount.balance;