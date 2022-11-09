const Paquete = require('./Paquete');

test("crear paquete", () => {
    paquete = new Paquete(1)
    expect (paquete.destino).toBe(1);
});

test("error al crear paquete sin destino", () => {
    paquete = new Paquete()
    expect(paquete.destino).toThrow("Debe ingresar destino");
});
