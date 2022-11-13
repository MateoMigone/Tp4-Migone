const Local = require('./Local');

test("crear local", () => {
    local = new Local("A");
    expect(local.nombre).toBe("A");
    expect(local.colaSalida).toBe(undefined);
});