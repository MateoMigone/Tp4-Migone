const CentroFacturacion = require('./CentroFacturacion');
const Paquete = require('./Paquete');

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

