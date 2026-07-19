
const account1 = {
    owner: "Alice",
    balance: 1000,
    history: [],

    deposit(amount) {
    	if (amount <= 0) {
    		throw Error("The amount must be greater than 0");
    	}

    	if (typeof amount !== "number") {
    		throw Error("Invalid data");
    	}

    	this.balance += amount;
    	this.history.push({type: "Deposit", amount});

    	console.log("Deposit Success Message");
    },

    withdraw(amount) {
    	if (amount <= 0) {
    		throw Error("The amount must be greater than 0");
    	}

    	if (typeof amount !== "number") {
    		throw Error("Invalid data");
    	}

    	if (this.balance < amount) {
    		throw Error("insufficient funds");
    	}

    	this.balance -= amount;
    	this.history.push({type: "Withdraw", amount});

    	console.log("Withdraw Success Message");
    },

    transfer(account, amount) {
    	if (amount <= 0) {
    		throw Error("The amount must be greater than 0");
    	}

    	if (typeof amount !== "number") {
    		throw Error("Invalid data");
    	}

    	if (account.owner === this.owner) {
    		throw Error("An account cannot transfer money to itself.");
    	}

    	if (account.balance < amount) {
			throw Error("insufficient funds");
    	}

    	this.balance -= amount;
    	account.balance += amount;

    	this.history.push({type: "Withdraw", amount});
    	account.history.push({type: "Deposit", amount});

    	console.log("Transfer Success Message");
    },

    showBalance() {
    	console.log(`${this.owner}'s balance: $${this.balance}`);
    },

    showHistory() {
    	if (!this.history.length) {
    		console.log("No operations yet.");
    		return;
    	}

    	for (let i = 0; i < this.history.length; ++i) {
    		let item = this.history[i];
    		console.log(`${item.type} - ${item.amount}`);
    	}
    },
};

const account2 = {
  owner: "Bob",
  balance: 500,
  history: [],
  showBalance: account1.showBalance,
  deposit: account1.deposit,
  showHistory: account1.showHistory,
  transfer: account1.transfer,
  withdraw: account1.withdraw
};