const Paquete = require('./Paquete');
const PaqueteSimple = require('./PaqueteSimple');

var paquete0;
var paquete1;
var paquete2;
beforeEach(function () {
    Paquete.prototype.numero = 0;
    paquete0 = new PaqueteSimple(1,[["remera",4],["buzo",2]],8);
    paquete1 = new PaqueteSimple(2,[["remera",10],["buzo",8]],6);
    paquete2 = new PaqueteSimple(2,[["teclado",5]],6);
});

test("crear paquete", () => {
    expect(paquete0.destino).toBe(1);
    expect(paquete0.listaProductos[0][0]).toBe("remera");
    expect(paquete0.listaProductos[0][1]).toBe(4);
    expect(paquete0.listaProductos[1][0]).toBe("buzo");
    expect(paquete0.listaProductos[1][1]).toBe(2);
    expect(paquete0.urgencia).toBe(8);
});

test("crear vario paquetes con distintos numeros de paquete", () => {
    expect(paquete0.numero).toBe(0);
    expect(paquete1.numero).toBe(1);
    expect(paquete2.numero).toBe(2);
});

test("preguntar si llego en tiempo", () => {
    paquete0.tiempoInicial = 0;
    paquete0.tiempoFinal = 6;
    expect(paquete0.llegoEnTiempo()).toBe("El paquete 0 llegó a tiempo");
    
});

test("error al crear paquete sin destino, productos ni urgencia", () => {
    expect(() => {
        paquete = new PaqueteSimple();
    }).toThrow("Debe ingresar todos los datos necesarios");
});

test("error al crear paquete sin productos ni urgencia", () => {
    expect(() => {
        paquete = new PaqueteSimple(1);
    }).toThrow("Debe ingresar todos los datos necesarios");
});

test("error al crear paquete sin urgencia", () => {
    expect(() => {
        paquete = new PaqueteSimple(1,[["remera",4],["buzo",2]]);
    }).toThrow("Debe ingresar todos los datos necesarios");
});

test("error al crear paquete con lista de productos vacia", () => {
    expect(() => {
        paquete = new PaqueteSimple(1,[],6);
    }).toThrow("Debe ingresar lista con un producto por lo menos");
});