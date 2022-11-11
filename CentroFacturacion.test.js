const CentroFacturacion = require('./CentroFacturacion');

test("crear centro facturacion ", () => {
    centroFacturacion = new CentroFacturacion(5);
    expect(centroFacturacion.capacidadProcesamiento).toBe(3);
    expect(centroFacturacion.capacidadCola).toBe(5);
});