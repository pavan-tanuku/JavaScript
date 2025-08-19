// 5. Create a bankAccount object with properties balance and methods deposit(amount) and withdraw(amount).

const bankAccount = {
    balance: 0,

    deposit: function(amount) {
        return `New balance after deposit is ${this.balance += amount}.`;
    },

    withdraw: function(amount) {
        if(amount > this.balance) return `Insufficient funds.`;
        else return `After withdrawal the balance is ${this.balance -= amount}.`;
    }
};

console.log(bankAccount.deposit(1000));
console.log(bankAccount.withdraw(500));
console.log(bankAccount.withdraw(600));
console.log(bankAccount.deposit(2000));