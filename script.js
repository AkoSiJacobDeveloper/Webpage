let moneyInTheBank = 100;

let salary = 200;


let expenses = (50 + 20);
console.log(expenses);

let moneyLeft = moneyInTheBank + (salary - expenses);

document.getElementById('MoneyBank').textContent = 'Money in Bank: ' + moneyInTheBank;
document.getElementById('salary').textContent = 'Salary: ' + salary;
document.getElementById('result').textContent = 'Expenses: ' + expenses;
document.getElementById('totalMoneyLeft').textContent = 'Money Left: ' + moneyLeft;

// alert('Expenses: ' + (20 + 50));
// alert('Money I have: ' + (100 + 200 - 70));