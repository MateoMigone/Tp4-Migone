const CentroFacturacion = require('./CentroFacturacion');
const Local = require('./Local');

var localA;
var localB;
var centroFacturacion;
var generarPaquete;
beforeEach(function () {
    localA = new Local("A");
    localB = new Local("B");
    centroFacturacion = new CentroFacturacion(5);
    generarPaquete0EnLocalA = localA.generarPaquete(1,[["remera",4],["buzo",2]],8);
});

test("crear local", () => {
    expect(localA.nombre).toBe("A");
    expect(localA.colaSalida.length).toBe(0);
});

test("generar paquetes en distintos locales", () => {
    generarPaquete0EnLocalA;
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

test("pasar paquete", () => {
    generarPaquete0EnLocalA;
    localA.pasarPaquete(centroFacturacion);
    expect(localA.colaSalida.length).toBe(0);
    expect(centroFacturacion.colaEntrada.length).toBe(1);
    expect(centroFacturacion.colaEntrada[0].numero).toBe(0); 
});
