const CentroDistribucion = require('./CentroDistribucion');
const Paquete = require('./Paquete');

test("crear centro de distribucion", () => {
    centroDistribucion = new CentroDistribucion(22);
    expect(centroDistribucion.capacidadProcesamiento).toBe(10);
    expect(centroDistribucion.capacidadCola).toBe(22);
    expect(centroDistribucion.colaEntrada.length).toBe(0);
    expect(centroDistribucion.colaSalida.length).toBe(0);
    expect(Centro.prototype.isPrototypeOf(CentroDistribucion.prototype)).toBe(true);
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