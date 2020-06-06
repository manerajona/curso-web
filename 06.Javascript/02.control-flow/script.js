// if...else
var a = 2,
    b = 2;

if (a == b) {
    console.log("a eq b")
}

if (b == '2') {
    console.log("b eq 2")
}

b++
if (b === '3') {
    console.log("b eq 3")
}

if (b == 3) {
    console.log("b eq 3")
}

if (a === 2) {
    console.log("a eq 2")
} else {
    console.log("a not eq 2")
}

a++
if (a == 1 || a == 2 || a == 3) {
    console.log("a is 1 or 2 or 3")
}

if(a===b && b===1000) {
    console.log("a eq b and b eq 3")
}

else {

    var mje = a===b ? "b not eq 1000" : "?";
    console.log(mje);

}

if (a === 1) {
    console.log("a is 1")
} else if (a === 2) {
    console.log("a i2 2")
} else if (a === 3) {
    console.log("a is 3")
} else {
    console.log("a is not 1, 2 or 3")
}

// switch...case
a++
switch (a) {
    case 1:
        console.log("a is 1");
        break;
    case 2:
        console.log("a is 2");
        break;
    case 3:
        console.log("a is 3");
        break;
    case 4:
        console.log("a is 4");
        break;
    default:
        console.log("a is not 1, 2, 3 or 4")
}

// for
for (var i = 0; i <= 10; i++) {
    console.log("i is " + i);
}

// while
var x = 50;
while (x !== 0) {
    if (x % 5 === 0) {
        console.log(x + " is divisible by 5");
    }
    x--
}

// do...while
var isTrue = true;
y = 100;
do {
    if (y === 10) {
        console.log("y is 10");
        isTrue = false;
    }
    y--

} while (isTrue);

// Arrays
var drinks = ['Wine', 'Beer', 'Coffe', 'Soda'];
console.log("drinks have " + drinks.length + " items");
console.log(drinks);

console.log(drinks[0]);
console.log(drinks[1]);
console.log(drinks[2]);
console.log(drinks[3]);

// add item
drinks[4] = 'Tea';
console.log(drinks[4]);

// loop an array
for (var drink of drinks) {
    console.log('I like a ' + drink)
}

// functions with arrays
var names = new Array('John', 'Bob', 'Zoe');
console.log(names);

// add last
names.push('Pedro');
console.log(names);

// add first
names.unshift('Lili');
console.log(names);

// remove last
names.pop();
console.log(names);

// remove first
names.shift();
console.log(names);

// remove items from x to y
names.splice(1, 2);
console.log(names);

// get index
var pos = names.indexOf('Carlos');
console.log(pos);

// remove item
var index = names.indexOf('John')
if (index != -1) {
    names.splice(index, 1);
}
console.log(names);