const CentroCalidad = require('./CentroCalidad');
const Paquete = require('./Paquete');

test("crear centro de calidad", () => {
    centroCalidad = new CentroCalidad(4);
    expect(centroCalidad.capacidadProcesamiento).toBe(1);
    expect(centroCalidad.capacidadCola).toBe(4);
    expect(centroCalidad.colaEntrada.length).toBe(0);
    expect(centroCalidad.colaSalida.length).toBe(0);
    expect(Centro.prototype.isPrototypeOf(CentroCalidad.prototype)).toBe(true);
});

test("error en capacidad de cola al crear centro de calidad", () => {
    expect(() => {
        centroCalidad = new CentroCalidad(8);
    }).toThrow("Capacidad de cola debe ser entre 2 y 5");
});

test("error al crear centro de calidad sin capacidad de cola", () => {
    expect(() => {
        centroCalidad = new CentroCalidad();
    }).toThrow("Debe ingresar capacidad de cola");
});