// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array=[];
  var arrayReturn = [];
  for (var i in objeto){
    array.push(i);
    array.push(objeto[i]);
    arrayReturn.push(array);
    array=[];
    }
    return arrayReturn;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {};
  var count = 0;
  for (let i=0; i < string.length; i++){
    for (let j=0; j < string.length; j++){
      if (string[i] === string[j]){
          count+= 1;
          obj[string[i]]=count;
        }
      }
      count = 0;
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var min = "";
    var may = "";
    for (let i=0; i < s.length; i++){
        if (s[i] === s[i].toLowerCase())
            min = min + s[i];
        else
            may= may + s[i];
    }
    s = may + min;
    return s
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  char = " "; var letter = "";
    for (let i=0; i< str.length; i++){
        if (str[i] !== " "){
            char = str[i] + char;
        }
        else {
            letter = letter + char;
            char = " ";
        }
    }
    letter = letter + char.replace(" ","");
    return letter;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numInv = "";
  var message = "";
  var numNor = String(numero);
  numero = String(numero);

  for (let i=0; i < numero.length; i++){
    numInv= numNor[i] +numInv;
    }

  if (numNor === numInv)
    message = "Es capicua"
  else
    message = "No es capicua"     
  return message;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de no contener dichas letras.
  //Escribe tu código aquí
  return cadena.split("").filter(function(elemento) {return elemento !== "a" && elemento !== "b" && elemento !== "c";}).join("");
};


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  result = arr.sort(function(a,b) { return a.length - b.length} );
  return result;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] intersección [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  //Una opción
  /*var c = [];
    for (let i=0; i < arreglo1.length;i++){
        for (let j=0; j < arreglo2.length; j++){
            if (arreglo1[i] == arreglo2[j]){
                c.push(arreglo1[i]);
            }
        }
    }
    return c;*/


    //Otra opción:
    var c = [];
    arreglo1.forEach (function(a) {
        arreglo2.forEach(function(b){
            if (a==b){
                c.push(a);
            }
        });
    })
    return c;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

