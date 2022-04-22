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


//Remaining Balance Calculation
function remainingBalance(totalMoney, expense) {
    const incomeMoney = parseFloat(totalMoney);
    if (incomeMoney < 0) {
        alert('invalid income amount is given');
    } else {
        const leftOverMoney = parseFloat(incomeMoney) - expense;
        return leftOverMoney;
    }
    return 0;
}

//Saving Amount Calculation
function saveCalc(money, saving, extra) {
    const savingPercentage = parseFloat(saving);
    if (savingPercentage < 0) {
        alert('inavlid saving percentage is given');
    } else {
        let savingCalc = parseFloat(money) * (savingPercentage / 100);
        console.log(savingCalc);
        if (savingCalc > extra) {
            alert(`Not enough money for saving ${savingPercentage}%`);
        } else {
            let savingMoney = extra - savingCalc;
            console.log(savingMoney);
            document.querySelector('#saving-amount').innerText = savingCalc;
            document.querySelector('#remaining-amount').innerText = savingMoney;
        }

    }

}

//Clicking Calculate Button
document.querySelector('#calc-btn').addEventListener('click', () => {
    expenditure = totalExpense(food.value, rent.value, clothes.value);
    console.log(expenditure);
    const extraMoney = remainingBalance(income.value, expenditure);
    document.querySelector('#remaining-balance').innerText = extraMoney;
    console.log(extraMoney);
})

//Clicking Save Button
document.querySelector('#save-btn').addEventListener('click', () => {
    const extraMoney = remainingBalance(income.value, expenditure);
    saveCalc(income.value, saving.value, extraMoney);
})