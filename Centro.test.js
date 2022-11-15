
const CentroFacturacion = require('./CentroFacturacion');

test("crear centro de facturacion", () => {
    centroFacturacion = new CentroFacturacion(5);
    expect(centroFacturacion.capacidadProcesamiento).toBe(3);
    expect(centroFacturacion.capacidadCola).toBe(5);
    expect(centroFacturacion.colaEntrada.length).toBe(0);
    expect(centroFacturacion.colaSalida.length).toBe(0);
    expect(Centro.prototype.isPrototypeOf(CentroFacturacion.prototype)).toBe(true);
});
