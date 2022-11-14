const Paquete = require('./Paquete');

test("crear paquete", () => {
    Paquete.prototype.numero = 0;
    paquete = new Paquete(1,[["remera",4],["buzo",2]],6);
    expect(paquete.destino).toBe(1);
    expect(paquete.listaProductos[0][0]).toBe("remera");
    expect(paquete.listaProductos[0][1]).toBe(4);
    expect(paquete.listaProductos[1][0]).toBe("buzo");
    expect(paquete.listaProductos[1][1]).toBe(2);
    expect(paquete.urgencia).toBe(6);
});

test("crear dos paquetes con distintos numeros de paquete", () => {
    Paquete.prototype.numero = 0;
    paquete0 = new Paquete(1,[["remera",4],["buzo",2]],6);
    paquete1 = new Paquete(2,[["libro",6],["lapicera",7]],6);
    paquete2 = new Paquete(3,[["bolso",1],["collar",2]],4);
    expect(paquete0.numero).toBe(0);
    expect(paquete1.numero).toBe(1);
    expect(paquete2.numero).toBe(2);
});



test("error al crear paquete sin destino, productos ni urgencia", () => {
    expect(() => {
        paquete = new Paquete();
    }).toThrow("Debe ingresar todos los datos necesarios");
});

test("error al crear paquete sin productos ni urgencia", () => {
    expect(() => {
        paquete = new Paquete(1);
    }).toThrow("Debe ingresar todos los datos necesarios");
});

test("error al crear paquete sin urgencia", () => {
    expect(() => {
        paquete = new Paquete(1,[["remera",4],["buzo",2]]);
    }).toThrow("Debe ingresar todos los datos necesarios");
});

test("error al crear paquete con lista de productos vacia", () => {
    expect(() => {
        paquete = new Paquete(1,[],6);
    }).toThrow("Debe ingresar lista con un producto por lo menos");
});

