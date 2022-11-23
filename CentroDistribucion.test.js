const Centro = require('./Centro');
const CentroDistribucion = require('./CentroDistribucion');
const Paquete = require('./Paquete');
const PaqueteSimple = require('./PaqueteSimple');
const PaqueteUnificado = require('./PaqueteUnificado');

var centroDistribucion;
beforeEach(function () {
    centroDistribucion = new CentroDistribucion(22);
    Paquete.prototype.numero = 0;
    paquete0 = new PaqueteSimple(4,[["remera",4],["buzo",2]],8);
    paquete1 = new PaqueteSimple(2,[["remera",10],["buzo",8]],6);
    paquete2 = new PaqueteSimple(2,[["teclado",5]],6);
    paquete3 = new PaqueteSimple(4,[["pantalon",3],["campera",1]],8);
    paquete4 = new PaqueteSimple(2,[["celular",3]],4);
});

test("crear centro de distribucion", () => {
    expect(centroDistribucion.capacidadProcesamiento).toBe(10);
    expect(centroDistribucion.capacidadCola).toBe(22);
    expect(centroDistribucion.colaEntrada.length).toBe(0);
    expect(centroDistribucion.colaSalida.length).toBe(0);
    expect(Centro.prototype.isPrototypeOf(CentroDistribucion.prototype)).toBe(true);
});

test("unificar paquetes", () => {
    centroDistribucion.recibirPaquete(paquete0);
    centroDistribucion.recibirPaquete(paquete1);
    centroDistribucion.recibirPaquete(paquete2);
    centroDistribucion.recibirPaquete(paquete3);
    centroDistribucion.recibirPaquete(paquete4);
    centroDistribucion.unificarPaquetes();
    expect(centroDistribucion.colaEntrada[1].listaPaquetes.includes(paquete0)).toBe(true);
    expect(centroDistribucion.colaEntrada[1].listaPaquetes.includes(paquete3)).toBe(true);
    expect(centroDistribucion.colaEntrada[0].listaPaquetes.includes(paquete1)).toBe(true);
    expect(centroDistribucion.colaEntrada[0].listaPaquetes.includes(paquete2)).toBe(true);
    expect(centroDistribucion.colaEntrada[0].listaPaquetes.includes(paquete4)).toBe(true);
    expect(centroDistribucion.colaEntrada.length).toBe(2);
});

test("error en capacidad de cola al crear centro de distribucion", () => {
    expect(() => {
        centroDistribucion = new CentroDistribucion(8);
    }).toThrow("Capacidad de cola debe ser entre 10 y 30");
});

test("error al crear centro de distribucion sin capacidad de cola", () => {
    expect(() => {
        centroDistribucion = new CentroDistribucion();
    }).toThrow("Debe ingresar capacidad de cola");
});
