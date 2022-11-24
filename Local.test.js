const CentroFacturacion = require('./CentroFacturacion');
const Local = require('./Local');
const Paquete = require('./Paquete');
const PaqueteSimple = require('./PaqueteSimple');
const Reloj = require('./Reloj');

var localA;
var localB;
var centroFacturacion;
beforeEach(function () {
    reloj = new Reloj();
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
    localA.generarPaquete(1,[["remera",4],["buzo",2]],8,reloj.tiempo);
    localA.generarPaquete(2,[["remera",10],["buzo",8]],6,reloj.tiempo);
    localA.generarPaquete(2,[["teclado",5]],6,reloj.tiempo);
    localB.generarPaquete(1,[["remera",4],["buzo",2]],6,reloj.tiempo);
    localB.generarPaquete(2,[["remera",10],["buzo",8]],6,reloj.tiempo);
    localB.generarPaquete(2,[["teclado",5]],6,reloj.tiempo);
    expect(localA.colaSalida[0].numero).toBe(0);
    expect(localA.colaSalida[1].numero).toBe(1);
    expect(localA.colaSalida[2].numero).toBe(2);
    expect(localB.colaSalida[0].numero).toBe(3);
    expect(localB.colaSalida[1].numero).toBe(4);
    expect(localB.colaSalida[2].numero).toBe(5);
});

test("generar hasta 5 paquetes por unidad de tiempo por local", () => {
    localA.generarPaquete(1,[["remera",4],["buzo",2]],8,reloj.tiempo);
    localA.generarPaquete(2,[["remera",10],["buzo",8]],6,reloj.tiempo);
    localA.generarPaquete(2,[["teclado",5]],6,reloj.tiempo);
    localA.generarPaquete(1,[["remera",4],["buzo",2]],6,reloj.tiempo);
    localA.generarPaquete(2,[["remera",10],["buzo",8]],6,reloj.tiempo);
    localA.generarPaquete(2,[["teclado",5]],6);
    expect(localA.colaSalida[0].numero).toBe(0);
    expect(localA.colaSalida[1].numero).toBe(1);
    expect(localA.colaSalida[2].numero).toBe(2);
    expect(localA.colaSalida[3].numero).toBe(3);
    expect(localA.colaSalida[4].numero).toBe(4);
    expect(localA.colaSalida[5]).toBe(undefined);
});

test("pasar paquete", () => {
    localA.generarPaquete(1,[["remera",4],["buzo",2]],8,reloj.tiempo);
    localA.pasarPaquetes(centroFacturacion);
    expect(localA.colaSalida.length).toBe(0);
    expect(centroFacturacion.colaEntrada.length).toBe(1);
    expect(centroFacturacion.colaEntrada[0].numero).toBe(0); 
});

test("pasar paquetes hasta que se llene la cola del proximo centro", () => {
    localA.generarPaquete(1,[["remera",4],["buzo",2]],8,reloj.tiempo);
    localA.generarPaquete(2,[["remera",10],["buzo",8]],6,reloj.tiempo);
    localA.generarPaquete(2,[["teclado",5]],6,reloj.tiempo);
    localA.generarPaquete(1,[["remera",4],["buzo",2]],6,reloj.tiempo);
    localA.generarPaquete(2,[["remera",10],["buzo",8]],6,reloj.tiempo);
    localA.pasarPaquetes(centroFacturacion);
    expect(localA.colaSalida[0].numero).toBe(0);
    expect(centroFacturacion.colaEntrada[0].numero).toBe(1);
    expect(centroFacturacion.colaEntrada[1].numero).toBe(2);
    expect(centroFacturacion.colaEntrada[2].numero).toBe(3); 
    expect(centroFacturacion.colaEntrada[3].numero).toBe(4);   
});

test("generar paquetes y avanzar tiempo", () => {
    localA.generarPaquete(1,[["remera",4],["buzo",2]],8,reloj.tiempo);
    localA.generarPaquete(2,[["remera",10],["buzo",8]],6,reloj.tiempo);
    localA.generarPaquete(2,[["teclado",5]],6,reloj.tiempo);
    localA.generarPaquete(1,[["remera",4],["buzo",2]],6,reloj.tiempo);
    localA.generarPaquete(2,[["remera",10],["buzo",8]],6,reloj.tiempo);
    localA.avanzarTiempo(centroFacturacion);
    expect(localA.capacidadGenerarPaquetes).toBe(5);
    expect(localA.colaSalida[0].numero).toBe(0);
    expect(centroFacturacion.colaEntrada[0].numero).toBe(1);
    expect(centroFacturacion.colaEntrada[1].numero).toBe(2);
    expect(centroFacturacion.colaEntrada[2].numero).toBe(3); 
    expect(centroFacturacion.colaEntrada[3].numero).toBe(4);   
});

test("error al crear local sin nombre", () => {
    expect(() => {
        local = new Local();
    }).toThrow("Debe pasarse el nombre del local por parametro al crearlo");
});

