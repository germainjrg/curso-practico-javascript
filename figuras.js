/*CODIGO DEL CUADRADO
//console.group('Cuadrados');
      ladoCuadrado = 5;
    console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm.');

    const perimetroCuadrado = ladoCuadrado * 4;
    console.log('El perimetro del cuadrado es: ' + perimetroCuadrado + ' cm.');

    const areaCuadrado = ladoCuadrado * ladoCuadrado;
    console.log('El Area del cuadrado es: ' + areaCuadrado + ' cm2.');
//console.groupEnd() */

function cuadrado (ladoC) {
    console.log('Los lados del cuadrado miden: ' + ladoC + ' cm.');
    
    var perimetroC = ladoC * 4;
    console.log('El perimetro del cuadrado es: ' + perimetroC + ' cm.');

    var areaC = ladoC * ladoC;
    console.log('El Area del cuadrado es: ' + areaC + ' cm2.');
}

/*CODIGO DEL TRIANGULO
//console.group('Triangulos')
    const ladoTriangulo1 = 6;
    const ladoTriangulo2 = 6;
    const baseTriangulo = 4;
    const alturaTriangulo = 5.5;
    console.log('Los lados del triangulo miden: ' + ladoTriangulo1 + ' cm, ' + ladoTriangulo2 + ' cm, ' + baseTriangulo + ' cm.');
    console.log('La altura del triangulo es: ' + alturaTriangulo + ' cm.');

    const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    console.log('El perimetro del triangulo es: ' + perimetroTriangulo);

    const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
    console.log('El Area del triangulo es: ' + areaTriangulo + ' cm2.');
// console.groupEnd();  */

function triangulo (l1,l2,l3,alt) {
    console.log('Los lados del triangulo miden: ' + l1 + ' cm, ' + l2 + ' cm, ' + l3 + ' cm.');
    console.log('La altura del triangulo es: ' + alt + ' cm.');

    var perimetroT = l1 + l2 + l3;
    console.log('El perimetro del triangulo es: ' + perimetroT + ' cm.');

    var areaT = (l3 * alt) / 2;
    console.log('El Area del triangulo es: ' + areaT + ' cm2.');
}

/*CODIGO DEL CIRCULO
console.group('Circulo');

    //RADIO
    const radioCirculo = 4;

    //DIAMETRO
    const diametroCirculo = radioCirculo * 2;

    //PI
    const PI = Math.PI;

    //CIRCUNFERENCIA
    const perimetroCirculo = diametroCirculo * PI;

    //AREA
    const areaCirculo = PI * (radioCirculo * radioCirculo);

    console.log('PI vale: ' + PI);
    console.log('El radio del circulo es: ' + radioCirculo + ' cm.');
    console.log('El perimetro del circulo es: ' + perimetroCirculo + ' cm.');
    console.log('El Area del circulo es: ' + areaCirculo + ' cm2.');

console.groupEnd(); */

function circulo (radioCirculo) {

    //DIAMETRO
    var  diametroCirculo = radioCirculo * 2;

    //PI
    const PI = Math.PI;

    //CIRCUNFERENCIA
    var perimetroCirculo = diametroCirculo * PI;

    //AREA
    var areaCirculo = PI * (radioCirculo * radioCirculo);

    console.log('PI vale: ' + PI);
    console.log('El radio del circulo es: ' + radioCirculo + ' cm.');
    console.log('El perimetro del circulo es: ' + perimetroCirculo + ' cm.');
    console.log('El Area del circulo es: ' + areaCirculo + ' cm2.');
}
