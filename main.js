var largoArray= function(datosArray){
	var palabras=[];
	var valorMax=0;
	var posicion;
//var datosArray= ["Holaa", "Frase Corta","frase Normalita","Frase muy muy larga" ,"Naaa"];
//console.log(datosArray.length);
for(var indice=0; indice<datosArray.length; indice++){
	palabras[indice]=datosArray[indice].length;
	//console.log(palabras[indice])
	if(palabras[indice]>valorMax){
		valorMax=palabras[indice];
		//posicion=indice;
	}	
}
resultado.push(valorMax);
return valorMax;
}

function obtieneMedia(arreglo){
	suma=0;
	for(var ind=0; ind<arreglo.length; ind++){
		suma=arreglo[ind]+suma;
	}
	return suma/arreglo.length;
}

var datosArray1= ["Holaa", "Frase Corta","frase Normalita","Frase muy muy lar" ,"Naaa"];
var datosArray2= ["Goku", "Freazer","Vegeta"];
var datosArray3= ["Nestor", "Mati","Andre Sanchez","ss"];
var resultado= [];
console.log(largoArray(datosArray1));
console.log(largoArray(datosArray2));
console.log(largoArray(datosArray3));
//resultado.push(largoArray(datosArray1));
//resultado.push(largoArray(datosArray2));
//resultado.push(largoArray(datosArray3));
console.log("Arreglo con valores maximos por string " + resultado);
console.log("La media es " + obtieneMedia(resultado));
