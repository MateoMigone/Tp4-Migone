const Local = require('./Local');
const CentroFacturacion = require('./CentroFacturacion');
const CentroCalidad = require('./CentroCalidad');
const CentroDistribucion = require('./CentroDistribucion');
const Paquete = require('./Paquete');
const PaqueteSimple = require('./PaqueteSimple');
const Mapa = require('./Mapa');

var localA;
var centroFacturacion;
var centroCalidad;
var centroDistribucion;
var paquete0;
var paquete1;
var paquete2;
var paquete3;
var paquete4;
var mapa;
beforeEach(function () {
    localA = new Local("A");
    centroFacturacion = new CentroFacturacion(5);
    centroCalidad = new CentroCalidad(4);
    centroDistribucion = new CentroDistribucion(22);
    Paquete.prototype.numero = 0;
    paquete0 = new PaqueteSimple(1,[["remera",4],["buzo",2]],8);
    paquete1 = new PaqueteSimple(2,[["remera",10],["buzo",8]],6);
    paquete2 = new PaqueteSimple(2,[["teclado",5]],6);
    paquete3 = new PaqueteSimple(4,[["pantalon",3],["campera",1]],8);
    paquete4 = new PaqueteSimple(3,[["celular",3]],4);
    mapa = new Mapa([[localA,centroFacturacion,centroCalidad,centroDistribucion]]);
});

test("crear mapa", () => {
    mapa = new Mapa([]);
    expect(mapa.filas[0][0]).toBe(localA);
    expect(mapa.filas[0][1]).toBe(centroFacturacion);
    expect(mapa.filas[0][2]).toBe(centroCalidad);
    expect(mapa.filas[0][3]).toBe(centroDistribucion);
});