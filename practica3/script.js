/*let num1=document.getElementById("num1"),
    num2=document.getElementById("num2"),
    res=document.getElementById("prueba");

function prueba(){
    
   if(num1.value>num2.value){
       res.innerHTML= "A es mayor";
   }else{
       res.innerHTML= "B es mayor";
   }
    
}*/

let num1=document.getElementById("num1"),
    num2=document.getElementById("num2");
var t=document.getElementById("tablas");

 
function multiplicar(){ 
    t.innerHTML="";
for(var i=0; i<=num2.value; i++){
    var elem=document.createElement("p");
    let texto=document.createTextNode(num1.value + " x " + i + " = " + num1.value * i);
    elem.appendChild(texto);
    t.appendChild(elem);
}
 }
