# Practice Assignment: Bank Account

## Objective
Build a simple Bank Account system using JavaScript objects and object methods.

---

# Requirements
Create two bank account objects.

Each account must have the following structure:

```js
const account1 = {
  owner: "Alice",
  balance: 1000,
  history: [],

  deposit(amount) {},
  withdraw(amount) {},
  transfer(account, amount) {},
  showBalance() {},
  showHistory() {},
};
```

Create another account (account2) with different initial data.

---

# Features to Implement

## 1. deposit(amount)
Deposits money into the account.

### Requirements

- The amount must be greater than 0.
- If the amount is invalid, display an error message.
- Otherwise:

---

## 2. withdraw(amount)
Withdraws money from the account.

### Requirements

- The amount must be greater than 0.
- The account must have enough money.
- If there are insufficient funds, display an error message.
- Otherwise:

---

## 3. transfer(account, amount)
Transfers money from the current account to another account.

### Requirements

- The amount must be greater than 0.
- An account cannot transfer money to itself.
- The account must have enough money.
- If all validations pass:

---

## 4. showBalance()
Displays the current balance.

Example:

Alice's balance: $1200

---

## 5. showHistory()
Displays all account operations.

If there are no operations:

No operations yet.

Otherwise, print every operation in chronological order.

---

# Test Cases
After implementing all methods, the following code should work correctly:

```js
account1.showBalance();

account2.showBalance();

account1.deposit(500);

account2.deposit(300);

account1.withdraw(200);

account2.withdraw(100);

account1.transfer(account2, 400);

account1.showBalance();

account2.showBalance();

account1.showHistory();

account2.showHistory();
```