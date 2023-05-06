 /*let a="Hola mundo";
          console.log(a);
var num1=5, num2=3;
          console.log(num1+num2);
let b="Juan Diego";
          console.log(a+" "+b);
*/
/*let a="Nombre:";
 let b="Juan Diego";
console.log(a+" "+b);

let c="Edad:";
let d="17";
console.log(c+" "+d);

let e="Fecha de nacimiento:";
let f="03/07/2005";
console.log(e+" "+f);*/

/*let nombre,edad,fecha;

nombre=prompt("Nombre:");

edad=prompt("Edad:");

fecha=prompt("Fecha de nacimiento:");


document.getElementById("nombre").innerHTML=nombre;
document.getElementById("edad").innerHTML=edad;
document.getElementById("fecha").innerHTML=fecha;*/


let nombre
nombre=prompt("Nombre:"); 
var num1 = 0, num2 = 0, res = 0;
num1= prompt("Primer numero a sumar");
num2=prompt("Segundo numero"); 

num1= prompt("Primer numero a multiplicar"); 
num2=prompt("Segundo numero");


num1= prompt("Primer numero a dividir");
num2=prompt("Segundo numero");


num1= prompt("Primer numero a restar");
num2=prompt("Segundo numero");


let res1, res2, res3, res4 

res1=(parseInt(num1)+parseInt(num2));
res2=(parseInt(num1)*parseInt(num2));
res3=(parseInt(num1)/parseInt(num2));
res4=(parseInt(num1)-parseInt(num2));

document.getElementById("nombre").innerHTML=nombre;
document.getElementById("suma").innerHTML="la suma de tus numeros es: "+res1;
document.getElementById("mult").innerHTML="la multiplicacion de tus numeros es: "+res2;
document.getElementById("div").innerHTML="la division de tus numeros es: "+res3;
document.getElementById("rest").innerHTML="la resta de tus numeros es: "+res4;


