const Centro = require('./Centro');
const CentroFacturacion = require('./CentroFacturacion');
const Paquete = require('./Paquete');

var centroFacturacion;
var centroFacturacion2;
var paquete0;
var paquete1;
var paquete2;
var paquete3;
var paquete4;
beforeEach(function () {
    centroFacturacion = new CentroFacturacion(5);
    centroFacturacion2 = new CentroFacturacion(6);
    Paquete.prototype.numero = 0;
    paquete0 = new Paquete(1,[["remera",4],["buzo",2]],8);
    paquete1 = new Paquete(2,[["remera",10],["buzo",8]],6);
    paquete2 = new Paquete(2,[["teclado",5]],6);
    paquete3 = new Paquete(4,[["pantalon",3],["campera",1]],8);
    paquete4 = new Paquete(3,[["celular",3]],4);
});

test("crear centro de facturacion", () => {
    expect(centroFacturacion.capacidadProcesamiento).toBe(3);
    expect(centroFacturacion.capacidadCola).toBe(5);
    expect(centroFacturacion.colaEntrada.length).toBe(0);
    expect(centroFacturacion.colaSalida.length).toBe(0);
    expect(Centro.prototype.isPrototypeOf(CentroFacturacion.prototype)).toBe(true);
});

test("recibir paquete", () => {
    centroFacturacion.recibirPaquete(paquete0);
    expect(centroFacturacion.colaEntrada[0]).toBe(paquete0);
});

test("consultar cuanto espacio hay en la cola", () => {
    centroFacturacion.recibirPaquete(paquete0);
    centroFacturacion.recibirPaquete(paquete1);
    centroFacturacion.recibirPaquete(paquete2);
    centroFacturacion.recibirPaquete(paquete3);
    expect(centroFacturacion.espacioEnCola()).toBe(1);
});

test("procesar paquetes", () => {
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

test("pasar paquetes", () => {
    centroFacturacion.recibirPaquete(paquete0);
    centroFacturacion.recibirPaquete(paquete1);
    centroFacturacion.recibirPaquete(paquete2);
    centroFacturacion.recibirPaquete(paquete3);
    centroFacturacion.recibirPaquete(paquete4);
    centroFacturacion.procesarPaquetes();
    centroFacturacion.pasarPaquetes(centroFacturacion2);
    expect(centroFacturacion.colaEntrada[0]).toBe(paquete0);
    expect(centroFacturacion.colaEntrada[1]).toBe(paquete3);
    expect(centroFacturacion.colaSalida.length).toBe(0);
    expect(centroFacturacion2.colaEntrada[0]).toBe(paquete4);
    expect(centroFacturacion2.colaEntrada[1]).toBe(paquete1);
    expect(centroFacturacion2.colaEntrada[2]).toBe(paquete2);
});


