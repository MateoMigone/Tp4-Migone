const CentroFacturacion = require('./CentroFacturacion');
const Local = require('./Local');
const Paquete = require('./Paquete');

var localA;
var localB;
var centroFacturacion;
beforeEach(function () {
    localA = new Local("A");
    localB = new Local("B");
    centroFacturacion = new CentroFacturacion(4);
    Paquete.prototype.numero = NaN;
});

test("crear local", () => {
    expect(localA.nombre).toBe("A");
    expect(localA.colaSalida.length).toBe(0);
});

test("generar paquetes en distintos locales", () => {
    localA.generarPaquete(1,[["remera",4],["buzo",2]],8);
    localA.generarPaquete(2,[["remera",10],["buzo",8]],6);
    localA.generarPaquete(2,[["teclado",5]],6);
    localB.generarPaquete(1,[["remera",4],["buzo",2]],6);
    localB.generarPaquete(2,[["remera",10],["buzo",8]],6);
    localB.generarPaquete(2,[["teclado",5]],6);
    expect(localA.colaSalida[0].numero).toBe(0);
    expect(localA.colaSalida[1].numero).toBe(1);
    expect(localA.colaSalida[2].numero).toBe(2);
    expect(localB.colaSalida[0].numero).toBe(3);
    expect(localB.colaSalida[1].numero).toBe(4);
    expect(localB.colaSalida[2].numero).toBe(5);
});

test("generar hasta 5 paquetes por unidad de tiempo por local", () => {
    localA.generarPaquete(1,[["remera",4],["buzo",2]],8);
    localA.generarPaquete(2,[["remera",10],["buzo",8]],6);
    localA.generarPaquete(2,[["teclado",5]],6);
    localA.generarPaquete(1,[["remera",4],["buzo",2]],6);
    localA.generarPaquete(2,[["remera",10],["buzo",8]],6);
    localA.generarPaquete(2,[["teclado",5]],6);
    expect(localA.colaSalida[0].numero).toBe(0);
    expect(localA.colaSalida[1].numero).toBe(1);
    expect(localA.colaSalida[2].numero).toBe(2);
    expect(localA.colaSalida[3].numero).toBe(3);
    expect(localA.colaSalida[4].numero).toBe(4);
    expect(localA.colaSalida[5]).toBe(undefined);
});

test("pasar paquete", () => {
    localA.generarPaquete(1,[["remera",4],["buzo",2]],8);
    localA.pasarPaquetes(centroFacturacion);
    expect(localA.colaSalida.length).toBe(0);
    expect(centroFacturacion.colaEntrada.length).toBe(1);
    expect(centroFacturacion.colaEntrada[0].numero).toBe(0); 
});

test("pasar paquetes hasta que se llene la cola del proximo centro", () => {
    localA.generarPaquete(1,[["remera",4],["buzo",2]],8);
    localA.generarPaquete(2,[["remera",10],["buzo",8]],6);
    localA.generarPaquete(2,[["teclado",5]],6);
    localA.generarPaquete(1,[["remera",4],["buzo",2]],6);
    localA.generarPaquete(2,[["remera",10],["buzo",8]],6);
    localA.pasarPaquetes(centroFacturacion);
    expect(localA.colaSalida[0].numero).toBe(0);
    expect(centroFacturacion.colaEntrada[0].numero).toBe(1);
    expect(centroFacturacion.colaEntrada[1].numero).toBe(2);
    expect(centroFacturacion.colaEntrada[2].numero).toBe(3); 
    expect(centroFacturacion.colaEntrada[3].numero).toBe(4);   
});


