const Paquete = require('./Paquete');

test("crear paquete con destino", () => {
    paquete = new Paquete(1)
    expect (paquete.destino).toBe(1);
});

test("error al crear paquete sin destino", () => {
    expect(() => {
        paquete = new Paquete();
    }).toThrow("Debe ingresar destino");
});

test("crear paquete con productos", () => {
    paquete = new Paquete(1,[["remera",4],["buzo",2]])
    expect(paquete.listaProductos[0][0]).toBe("remera");
});
