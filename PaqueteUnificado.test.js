const Paquete = require('./Paquete');
const PaqueteSimple = require('./PaqueteSimple');
const PaqueteUnificado = require('./PaqueteUnificado');

var paqueteUnificado;
var paquete0;
var paquete1;
beforeEach(function () {
    Paquete.prototype.numero = 0;
    paquete0 = new PaqueteSimple(2,[["remera",10],["buzo",8]],6);
    paquete1 = new PaqueteSimple(2,[["teclado",5]],4);
    paqueteUnificado = new PaqueteUnificado([paquete0,paquete1]);
});

test("crear paquete unificado", () => {
    expect(paqueteUnificado.destino).toBe(2);
    expect(paqueteUnificado.listaPaquetes.includes(paquete0)).toBe(true);
    expect(paqueteUnificado.listaPaquetes.includes(paquete1)).toBe(true);
    expect(paquete0.urgencia).toBe(4);
    expect(paqueteUnificado.numero).toBe(2);
});

test("error al crear paquete unificado con una lista que contenga menos de 2 paquetes", () => {
    expect(() => {
        paqueteUnificado = new PaqueteUnificado([]);
    }).toThrow("Debe ingresar una lista con dos o mas paquetes");
});