const Local = require('./Local');

test("crear local", () => {
    local = new Local("A");
    expect(local.nombre).toBe("A");
    expect(local.colaSalida.length).toBe(0);
});

test("crear local", () => {
    local = new Local("A");
    local.generarPaquete(1,[["remera",4],["buzo",2]],6);
    expect(local.colaSalida[0].numero).toBe(0);
});

