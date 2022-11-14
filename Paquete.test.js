const Paquete = require('./Paquete');

var paquete0;
beforeEach(function () {
    Paquete.prototype.numero = 0;
    paquete0 = new Paquete(1,[["remera",4],["buzo",2]],6);
    paquete1 = new Paquete(2,[["libro",6],["lapicera",7]],6);
    paquete2 = new Paquete(3,[["bolso",1],["collar",2]],4);
});

test("crear paquete", () => {
    expect(paquete0.destino).toBe(1);
    expect(paquete0.listaProductos[0][0]).toBe("remera");
    expect(paquete0.listaProductos[0][1]).toBe(4);
    expect(paquete0.listaProductos[1][0]).toBe("buzo");
    expect(paquete0.listaProductos[1][1]).toBe(2);
    expect(paquete0.urgencia).toBe(6);
});

test("crear vario paquetes con distintos numeros de paquete", () => {
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

