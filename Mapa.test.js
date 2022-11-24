const Local = require('./Local');
const CentroFacturacion = require('./CentroFacturacion');
const CentroCalidad = require('./CentroCalidad');
const CentroDistribucion = require('./CentroDistribucion');
const Paquete = require('./Paquete');
const PaqueteSimple = require('./PaqueteSimple');
const Mapa = require('./Mapa');
const Reloj = require('./Reloj');

var localA;
var centroFacturacion;
var centroCalidad;
var centroDistribucion;
var mapa;
var reloj;
beforeEach(function () {
    localA = new Local("A");
    centroFacturacion = new CentroFacturacion(5);
    centroCalidad = new CentroCalidad(4);
    centroDistribucion = new CentroDistribucion(22);
    mapa = new Mapa([[localA,centroFacturacion,centroCalidad,centroDistribucion]]);
    reloj = new Reloj();
    Paquete.prototype.numero = NaN;
});

test("crear mapa", () => {
    expect(mapa.matriz[0][0]).toBe(localA);
    expect(mapa.matriz[0][1]).toBe(centroFacturacion);
    expect(mapa.matriz[0][2]).toBe(centroCalidad);
    expect(mapa.matriz[0][3]).toBe(centroDistribucion);
});

test("generar paquetes y avanzar 1 tiempo en el mapa", () => {
    mapa.matriz[0][0].generarPaquete(0,[["remera",4],["buzo",2]],8,reloj.tiempo);
    mapa.matriz[0][0].generarPaquete(0,[["remera",10],["buzo",8]],6,reloj.tiempo);
    mapa.matriz[0][0].generarPaquete(0,[["teclado",5]],6,reloj.tiempo);
    mapa.matriz[0][0].generarPaquete(0,[["pantalon",3],["campera",1]],8,reloj.tiempo);
    mapa.matriz[0][0].generarPaquete(0,[["celular",3]],4,reloj.tiempo);
    localA.avanzarTiempo(centroDistribucion);
    // expect(mapa.matriz[0][0].colaSalida.length).toBe(0);
    // expect(mapa.matriz[0][1].colaEntrada[0]).toBe(paquete0);
    // expect(mapa.matriz[0][1].colaEntrada[1]).toBe(paquete3);
    // expect(mapa.matriz[0][1].colaSalida[0]).toBe(paquete4);
    // expect(mapa.matriz[0][1].colaSalida[1]).toBe(paquete1);
    // expect(mapa.matriz[0][1].colaSalida[2]).toBe(paquete2);
    // expect(mapa.matriz[0][2].espacioEnCola()).toBe(mapa.matriz[0][2].capacidadCola);
    // expect(mapa.matriz[0][3].espacioEnCola()).toBe(mapa.matriz[0][3].capacidadCola);
    // expect(reloj.tiempo).toBe(1);
});

