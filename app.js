const income = document.querySelector('#income-field');
const food = document.querySelector('#food-field');
const rent = document.querySelector('#rent-field');
const clothes = document.querySelector('#clothes-field');
const saving = document.querySelector('#saving-field');
let expenditure = 0;

// Total Expense Calculation
function totalExpense(meals, shelter, dress) {
    if (meals < 0 || shelter < 0 || dress < 0) {
        alert('invalid expense is given, please provide valid amount!');
    } else {
        const expense = parseFloat(meals) + parseFloat(shelter) + parseFloat(dress);
        document.querySelector('#total-expense').innerText = expense;
        return expense;
    }
    return 0;

}

