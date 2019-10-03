function saludarSwitch(valor, callback) {
    var nombre;
    switch(valor) {
        case 1 : nombre = "jonathan";
        break;
        case 2 :  nombre ="gabriela";
        break;
        case 3 :  nombre ="simon";
        break;
        default : "mundo";
    }
    callback(nombre);
}
sumar = (a,b) => {return (a+b);};

function suma(num1, num2) {
    var suma = sumar(num1, num2);
    console.log(suma);
}