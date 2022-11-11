const CentroFacturacion = require('./CentroFacturacion');
const Paquete = require('./Paquete');

test("crear centro facturacion ", () => {
    centroFacturacion = new CentroFacturacion(5);
    expect(centroFacturacion.capacidadProcesamiento).toBe(3);
    expect(centroFacturacion.capacidadCola).toBe(5);
    expect(centroFacturacion.colaEntrada[0]).toBe(undefined);
    expect(centroFacturacion.colaSalida[0]).toBe(undefined);
});

test("recibir paquete", () => {
    centroFacturacion = new CentroFacturacion(5);
    paquete = new Paquete(1,[["remera",4],["buzo",2]],6)
    centroFacturacion.recibirPaquete(paquete);
    expect(centroFacturacion.colaEntrada[0]).toBe(paquete);
});

test("procesar paquete", () => {
    centroFacturacion = new CentroFacturacion(5);
    paquete = new Paquete(1,[["remera",4],["buzo",2]],6)
    centroFacturacion.recibirPaquete(paquete);
    centroFacturacion.procesarPaquetes();
    expect(centroFacturacion.colaEntrada[0]).toBe(undefined);
    expect(centroFacturacion.colaSalida[0]).toBe(paquete);
});

test("procesar varios paquetes cuando hay mas de 3 en la cola", () => {
    centroFacturacion = new CentroFacturacion(5);
    paquete1 = new Paquete(1,[["remera",4],["buzo",2]],8);
    paquete2 = new Paquete(2,[["remera",10],["buzo",8]],6);
    paquete3 = new Paquete(2,[["teclado",5]],6);
    paquete4 = new Paquete(4,[["pantalon",3],["campera",1]],8);
    paquete5 = new Paquete(3,[["celular",3]],4);
    centroFacturacion.recibirPaquete(paquete1);
    centroFacturacion.recibirPaquete(paquete2);
    centroFacturacion.recibirPaquete(paquete3);
    centroFacturacion.recibirPaquete(paquete4);
    centroFacturacion.recibirPaquete(paquete5);
    centroFacturacion.procesarPaquetes();
    expect(centroFacturacion.colaEntrada[0]).toBe(paquete1);
    expect(centroFacturacion.colaEntrada[1]).toBe(paquete4);
    expect(centroFacturacion.colaSalida[0]).toBe(paquete3);
    expect(centroFacturacion.colaSalida[1]).toBe(paquete2);
    expect(centroFacturacion.colaSalida[2]).toBe(paquete5);
});

