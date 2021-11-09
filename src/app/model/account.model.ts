export class Account {
    name: string;
    number: string;
    type: string;
    status: string;
    balance: string;
    checked: boolean;

    constructor(name: string, number:string, type: string, status: string, balance: string, checked: boolean){
        this.name = name;
        this.number = number;
        this.type = type;
        this.status = status;
        this.balance = balance;
        this.checked = checked;
    }
    
}