const Paquete = require('./Paquete');

test("crear paquete", () => {
    paquete = new Paquete(1)
    expect (paquete.destino).toBe(1);
});

test("crear paquete", () => {
    paquete = new Paquete()
    expect(paquete.destino).toThrow(new Error("Debe ingresar destino"));
});
