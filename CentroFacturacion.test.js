const Centro = require('./Centro');
const CentroFacturacion = require('./CentroFacturacion');
const Paquete = require('./Paquete');

test("crear centro de facturacion", () => {
    expect(centroFacturacion.capacidadProcesamiento).toBe(3);
    expect(centroFacturacion.capacidadCola).toBe(5);
    expect(centroFacturacion.colaEntrada.length).toBe(0);
    expect(centroFacturacion.colaSalida.length).toBe(0);
    expect(Centro.prototype.isPrototypeOf(CentroFacturacion.prototype)).toBe(true);
});

test("error en capacidad de cola al crear centro de facturacion", () => {
    expect(() => {
        centroFacturacion = new CentroFacturacion(8);
    }).toThrow("Capacidad de cola debe ser entre 3 y 6");
});

test("error al crear centro de facturacion sin capacidad de cola", () => {
    expect(() => {
        centroFacturacion = new CentroFacturacion();
    }).toThrow("Debe ingresar capacidad de cola");
});

