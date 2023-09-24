const incomeBox = document.getElementById('incomebox');
const expenseBox = document.getElementById('expensebox');

const listIncome = document.getElementById('list-container1');
const listExpense = document.getElementById('list-container2');

function AddIncome(){
    if(incomeBox.value==''){
        alert("Error");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = incomeBox.value;
        listIncome.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u2715";
        li.appendChild(span);
    }
    incomeBox.value = '';
    saveIncome();
}

function AddExpense(){
    if(expenseBox.value==''){
        alert("Error");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = expenseBox.value;
        listExpense.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u2715";
        li.appendChild(span);
    }
    expenseBox.value = '';
    saveExpense();
}

list-container1.addEventListener("click", function(e){
    if(e.target.tagName=="span"){
        e.target.parentElement.remove();
        saveIncome();
    }
}, false);

list-container2.addEventListener("click", function(e){
    if(e.target.tagName=="span"){
        e.target.parentElement.remove();
        saveExpense();
    }
}, false);

function saveIncome(){
    localStorage.setItem("data", list-container1.innerHTML);
}

function saveExpense(){
    localStorage.setItem("data", list-container2.innerHTML);
}

function showIncome(){
    var listContainer1 = document.getElementById("list-container1");
    listContainer1.innerHTML = localStorage.getItem("data");
}

function showExpense(){
    var listContainer2 = document.getElementById("list-container2");
    listContainer2.innerHTML = localStorage.getItem("data");
}

showExpense();
showIncome();