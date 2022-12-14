const Paquete = require('./Paquete');

function PaqueteSimple (dest,lisProd,urg,tInicial){
    Paquete.call(this,dest,urg);
    this.tiempoInicial = tInicial;
    this.listaProductos = lisProd;
    if (dest === undefined || lisProd === undefined || urg === undefined){
        throw new Error("Debe ingresar todos los datos necesarios");
    }
    if (lisProd.length == 0){
        throw new Error("Debe ingresar lista con un producto por lo menos");
    }
    
}

PaqueteSimple.prototype = Object.create(Paquete.prototype);
PaqueteSimple.prototype.constructor = PaqueteSimple;

module.exports = PaqueteSimple;