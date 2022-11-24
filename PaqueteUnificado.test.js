const Paquete = require('./Paquete');
const PaqueteSimple = require('./PaqueteSimple');
const PaqueteUnificado = require('./PaqueteUnificado');
const Reloj = require('./Reloj');

var paqueteUnificado;
var paquete0;
var paquete1;
var reloj;
beforeEach(function () {
    reloj = new Reloj();
    Paquete.prototype.numero = 0;
    paquete0 = new PaqueteSimple(2,[["remera",10],["buzo",8]],6,reloj.tiempo);
    paquete1 = new PaqueteSimple(2,[["teclado",5]],4,reloj.tiempo);
    paqueteUnificado = new PaqueteUnificado([paquete0,paquete1]);
});

test("crear paquete unificado", () => {
    expect(paqueteUnificado.destino).toBe(2);
    expect(paqueteUnificado.listaPaquetes.includes(paquete0)).toBe(true);
    expect(paqueteUnificado.listaPaquetes.includes(paquete1)).toBe(true);
    expect(paqueteUnificado.urgencia).toBe(4);
    expect(paqueteUnificado.numero).toBe(2);
    expect(paqueteUnificado.tiempoInicial).toBe(0);
});

test("error al crear paquete unificado con una lista que contenga menos de 2 paquetes", () => {
    expect(() => {
        paqueteUnificado = new PaqueteUnificado([]);
    }).toThrow("Debe ingresar una lista con dos o mas paquetes");
});