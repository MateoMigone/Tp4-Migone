const CentroFacturacion = require('./CentroFacturacion');
const Paquete = require('./Paquete');

test("crear centro facturacion ", () => {
    centroFacturacion = new CentroFacturacion(5);
    expect(centroFacturacion.capacidadProcesamiento).toBe(3);
    expect(centroFacturacion.capacidadCola).toBe(5);
    expect(centroFacturacion.colaEntrada[0]).toBe(undefined);
    expect(centroFacturacion.colaSalida[0]).toBe(undefined);
});

test("recibir paquete", () => {
    centroFacturacion = new CentroFacturacion(5);
    centroFacturacion.recibirPaquete(paquete);
    expect(centroFacturacion.colaEntrada[0]).toBe(paquete);
});

