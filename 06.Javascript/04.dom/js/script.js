const buttonNumber = document.getElementsByName('data-number');
const buttonOp = document.getElementsByName('data-op');
const buttonEq = document.getElementsByName('data-eq')[0];
const buttonDel = document.getElementsByName('data-delete')[0];

var result = document.getElementById('result');
var currentOp = '';
var lastOp = '';
var operation = undefined;

buttonNumber.forEach((button) => {
    button.addEventListener('click', () => {
        if(operation == '=') {
            clear();
        }
        var num = button.innerText;
        currentOp = currentOp.toString() + num.toString();
        refresh();
    });
});

buttonOp.forEach((button) => {
    button.addEventListener('click', () => {
        var op = button.innerText;
        if (currentOp === '') return;
        if (lastOp !== '') {
            calculate();
        }
        operation = op.toString();
        lastOp = currentOp;
        currentOp = '';
    });
});

buttonEq.addEventListener('click', () => {
    calculate();
    refresh();
    operation = '=';
});

buttonDel.addEventListener('click', () => {
    clear();
    refresh();
});

function calculate() {
    var calculation;
    const last = parseFloat(lastOp);
    const current = parseFloat(currentOp);
    if (isNaN(last) || isNaN(current)) return;
    switch (operation) {
        case '+':
            calculation = last + current;
            break;
        case '-':
            calculation = last - current;
            break;
        case 'x':
            calculation = last * current;
            break;
        case '/':
            calculation = last / current;
            break;
        default:
            return;
    }
    currentOp = calculation;
    operation = undefined;
    lastOp = '';
}

function clear() {
    currentOp = '';
    lastOp = '';
    operation = undefined;
}

function refresh() {
    result.value = currentOp;
}

clear();