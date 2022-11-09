const Paquete = require('./Paquete');

test("crear paquete", () => {
    paquete = new Paquete(1)
    expect (paquete.destino).toBe(1);
});

test("error al crear paquete sin destino", () => {
    expect(() => {
        paquete = new Paquete();
    }).toThrow("Debe ingresar destino");
});
