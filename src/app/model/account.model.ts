export class Account {
    name: string;
    number: string;
    type: string;
    status: string;
    balance: string;

    constructor(name: string, number:string, type: string, status: string, balance: string){
        this.name = name;
        this.number = number;
        this.type = type;
        this.status = status;
        this.balance = balance;
    }
    
}