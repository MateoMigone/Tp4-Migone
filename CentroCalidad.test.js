const CentroCalidad = require('./CentroCalidad');
const Paquete = require('./Paquete');

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