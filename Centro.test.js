const Centro = require('./Centro');
const CentroFacturacion = require('./CentroFacturacion');
const CentroCalidad = require('./CentroCalidad');
const CentroDistribucion = require('./CentroDistribucion');
const Paquete = require('./Paquete');

var centroFacturacion;
var centroCalidad;
var centroDistribucion;
var paquete0;
var paquete1;
var paquete2;
var paquete3;
var paquete4;
beforeEach(function () {
    centroFacturacion = new CentroFacturacion(5);
    centroCalidad = new CentroCalidad(4);
    centroDistribucion = new CentroDistribucion(22);
    Paquete.prototype.numero = 0;
    paquete0 = new Paquete(1,[["remera",4],["buzo",2]],8);
    paquete1 = new Paquete(2,[["remera",10],["buzo",8]],6);
    paquete2 = new Paquete(2,[["teclado",5]],6);
    paquete3 = new Paquete(4,[["pantalon",3],["campera",1]],8);
    paquete4 = new Paquete(3,[["celular",3]],4);
});



test("recibir paquete en centro de facturacion", () => {
    centroFacturacion.recibirPaquete(paquete0);
    expect(centroFacturacion.colaEntrada[0]).toBe(paquete0);
});

test("consultar cuanto espacio hay en la cola de un centro", () => {
    centroFacturacion.recibirPaquete(paquete0);
    centroFacturacion.recibirPaquete(paquete1);
    centroFacturacion.recibirPaquete(paquete2);
    centroFacturacion.recibirPaquete(paquete3);
    expect(centroFacturacion.espacioEnCola()).toBe(1);
});

test("procesar paquetes en centro de facturacion", () => {
    centroFacturacion.recibirPaquete(paquete0);
    centroFacturacion.recibirPaquete(paquete1);
    centroFacturacion.recibirPaquete(paquete2);
    centroFacturacion.recibirPaquete(paquete3);
    centroFacturacion.recibirPaquete(paquete4);
    centroFacturacion.procesarPaquetes();
    expect(centroFacturacion.colaEntrada[0]).toBe(paquete0);
    expect(centroFacturacion.colaEntrada[1]).toBe(paquete3);
    expect(centroFacturacion.colaSalida[0]).toBe(paquete4);
    expect(centroFacturacion.colaSalida[1]).toBe(paquete1);
    expect(centroFacturacion.colaSalida[2]).toBe(paquete2);
});

test("pasar paquetes del centro de facturacion al centro de calidad", () => {
    centroFacturacion.recibirPaquete(paquete0);
    centroFacturacion.recibirPaquete(paquete1);
    centroFacturacion.recibirPaquete(paquete2);
    centroFacturacion.recibirPaquete(paquete3);
    centroFacturacion.recibirPaquete(paquete4);
    centroFacturacion.procesarPaquetes();
    centroFacturacion.pasarPaquetes(centroCalidad);
    expect(centroFacturacion.colaEntrada[0]).toBe(paquete0);
    expect(centroFacturacion.colaEntrada[1]).toBe(paquete3);
    expect(centroFacturacion.colaSalida.length).toBe(0);
    expect(centroCalidad.colaEntrada[0]).toBe(paquete4);
    expect(centroCalidad.colaEntrada[1]).toBe(paquete1);
    expect(centroCalidad.colaEntrada[2]).toBe(paquete2);
});

test("pasar paquetes del centro de calidad al centro de distribucion", () => {
    centroCalidad.recibirPaquete(paquete0);
    centroCalidad.recibirPaquete(paquete1);
    centroCalidad.recibirPaquete(paquete2);
    centroCalidad.procesarPaquetes();
    centroCalidad.pasarPaquetes(centroDistribucion);
    expect(centroCalidad.colaEntrada[0]).toBe(paquete2);
    expect(centroCalidad.colaEntrada[1]).toBe(paquete0);
    expect(centroCalidad.colaSalida.length).toBe(0);
    expect(centroDistribucion.colaEntrada[0]).toBe(paquete1);
});

test("pasar paquetes del centro de distribucion al centro de facturacion", () => {
    centroDistribucion.recibirPaquete(paquete0);
    centroDistribucion.recibirPaquete(paquete1);
    centroDistribucion.recibirPaquete(paquete2);
    centroDistribucion.recibirPaquete(paquete3);
    centroDistribucion.recibirPaquete(paquete4);
    centroDistribucion.procesarPaquetes();
    centroDistribucion.pasarPaquetes(centroFacturacion);
    expect(centroFacturacion.colaEntrada[0]).toBe(paquete0);
    // expect(centroDistribucion.colaEntrada.length).toBe(0);
    // expect(centroDistribucion.colaSalida.length).toBe(0);
    // expect(centroFacturacion.colaEntrada[0]).toBe(paquete4);
    // expect(centroFacturacion.colaEntrada[1]).toBe(paquete1);
    // expect(centroFacturacion.colaEntrada[2]).toBe(paquete2);
    // expect(centroFacturacion.colaEntrada[3]).toBe(paquete0);
    // expect(centroFacturacion.colaEntrada[4]).toBe(paquete3);
});


