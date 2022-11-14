const CentroFacturacion = require('./CentroFacturacion');
const Local = require('./Local');

test("crear local", () => {
    local = new Local("A");
    expect(local.nombre).toBe("A");
    expect(local.colaSalida.length).toBe(0);
});

test("generar paquetes en distintos locales", () => {
    localA = new Local("A");
    localB = new Local("B");
    localA.generarPaquete(1,[["remera",4],["buzo",2]],6);
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
    local = new Local("A");
    centroFacturacion = new CentroFacturacion(5);
    local.generarPaquete(1,[["remera",4],["buzo",2]],6);
    local.pasarPaquete(local.colaSalida[0],centroFacturacion);
    expect(local.colaSalida.length).toBe(0);
    expect(local.colaSalida.length).toBe(1);
    expect(centroFacturacion.colaSalida[0].numero).toBe(0);
});
