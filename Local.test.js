const Local = require('./Local');

test("crear local", () => {
    local = new Local("A");
    expect(local.nombre).toBe("A");
    expect(local.colaSalida.length).toBe(0);
});

test("generar paquetes", () => {
    local = new Local("A");
    local.generarPaquete(1,[["remera",4],["buzo",2]],6);
    local.generarPaquete(2,[["remera",10],["buzo",8]],6);
    local.generarPaquete(2,[["teclado",5]],6);
    expect(local.colaSalida[0].numero).toBe(0);
    expect(local.colaSalida[1].numero).toBe(1);
    expect(local.colaSalida[2].numero).toBe(2);
});


