let nombre = prompt("Ingrese su Nombre");
let edad = parseInt(prompt("Ingrese su edad"));
let alfajores = parseInt(prompt("¿Cuantos alfajores se come por día?"));

const caloriasAlfajor = 130;

let calorias = caloriasAlfajor * alfajores * 7;
alfajores = alfajores * 7;

alert("Hola " + nombre + ", tu edad es " + edad + " y por lo que me contás te comes " + alfajores + " por semana. Esto serían " + calorias + " calorías en total.")