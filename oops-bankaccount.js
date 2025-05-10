class BankAccount {
  constructor(customerName, balance) {
    this.customerName = customerName;
    this.accountNumber = Math.floor(Math.random() * 1000000000000);
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      alert("Not Enough Money to Withdraw.....");
    }
  }
}

class SavingsAccount extends BankAccount {
  constructor(customerName, balance) {
    super(customerName, balance);
    this.accountType = "Savings";
  }
}

class CurrentAccount extends BankAccount {
  constructor(customerName, balance) {
    super(customerName, balance);
    this.accountType = "Current";
  }
}

let accountForm = document.getElementById("accountForm");
let customerName = document.getElementById("customerName");
let balance = document.getElementById("balance");
let selectAccountType = document.getElementById("selectAccountType");
let accounts = [];

accountForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let account;

  if (selectAccountType.value === "Savings") {
    account = new SavingsAccount(customerName.value, +balance.value);
  } else if (selectAccountType.value === "Current") {
    account = new CurrentAccount(customerName.value, +balance.value);
  }

  accounts.push(account);

  localStorage.setItem("BankAccount", JSON.stringify(accounts));

  displayData();

  e.target.reset();
});

const displayData = () => {
  let tr = "";

  accounts.map((account, index) => {
    tr += `
        <tr>
          <td>${index + 1}</td>  
          <td>${account.customerName}</td>  
          <td>${account.accountNumber}</td>  
          <td>${account.accountType}</td>  
          <td>${account.balance}</td>  
        </tr>
      `;
  });

  document.getElementById("tableData").innerHTML = tr;
};

displayData();
