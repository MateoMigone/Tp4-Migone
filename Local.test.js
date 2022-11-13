const Local = require('./Local');

test("crear local", () => {
    local = new Local("A");
    expect(local.nombre).toBe("A");
    expect(local.colaSalida.length).toBe(0);
});

test("crear local", () => {
    local = new Local("A");
    local.generarPaquete(1,[["remera",4],["buzo",2]],6);
    expect(local.colaSalida[0].listaProductos[0][0]).toBe("remera");
    expect(local.colaSalida[0].listaProductos[0][1]).toBe(4);
    expect(local.colaSalida[0].listaProductos[1][0]).toBe("buzo");
    expect(local.colaSalida[0].listaProductos[1][1]).toBe(2);
});

