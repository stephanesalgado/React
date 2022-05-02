// ---- Exportaciones antes de las sentencias
//
//1.- Exportar constante

export const PRUEBA = 2005;

//array

export let days =["sunday", "monday"];

//3 objeto user (name:"santi" email)

export const user={
    name: "santi",
    email: "s@s.com"
}

//4 función suma

export function suma(a,b){
    return (a+b);

}

// ---------Export separado de la sentencia

function restar(a,b){
    return(a-b);
}
function multiplicar(a,b){
    return(a*b);
}

export {restar, multiplicar};


//export default------------------------------------

export default function dividir(a,b){
    return (a/b);
}

export function saludar(nombre){
    return ("buenos días " + nombre);
}
// archivo nuevo.js
// function saludar le pasamos por parametro un nombre y nos devuelva buenas tarde: ese nombre
