const Paquete = require('./Paquete');

test("crear paquete", () => {
    paquete = new Paquete(1,[["remera",4],["buzo",2]],6);
    expect(paquete.destino).toBe(1);
    expect(paquete.listaProductos[0][0]).toBe("remera");
    expect(paquete.listaProductos[0][1]).toBe(4);
    expect(paquete.listaProductos[1][0]).toBe("buzo");
    expect(paquete.listaProductos[1][1]).toBe(2);
    expect(paquete.urgencia).toBe(6);
    
});

test("error al crear paquete sin destino", () => {
    expect(() => {
        paquete = new Paquete();
    }).toThrow("Debe ingresar destino");
});

test("error al crear paquete sin productos", () => {
    expect(() => {
        paquete = new Paquete(1);
    }).toThrow("Debe ingresar producto/s");
});

test("error al crear paquete sin urgencia", () => {
    expect(() => {
        paquete = new Paquete(1,[["remera",4],["buzo",2]]);
    }).toThrow("Debe ingresar urgencia");
});
