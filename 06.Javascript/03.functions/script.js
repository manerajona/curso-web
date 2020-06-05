// Consumer
function print(nombre) {
    console.log('Hello ' + nombre);
}

print('Anna');

// Supplier
function getMessage() {
    return "Javascript is cool";
}

console.log(getMessage());

// Func
function f(input1, input2) {
    if (typeof(input1) === 'number' && typeof(input2) === 'number') {
        return +input1 + input2;
    } else {
        return input1 + " " + input2;
    }

}

console.log(f(2,2));
console.log(f("Dos",2));
console.log(f("Dos","Dos"));

// Recursive func
function factorial(num) {
    if(num==0) {
        return 1;
    }
    return num*factorial(num-1);
}

console.log("the factorial of 10 is "+ factorial(10));

// Annonymous func
var sum = (a,b) => a + b;
console.log("sum is "+sum(10, 12));


