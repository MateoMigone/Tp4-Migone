const Paquete = require('./Paquete');

function PaqueteSimple (dest,lisProd,urg){
    Paquete.call(this,dest,urg);
    if (dest === undefined || lisProd === undefined || urg === undefined){
        throw new Error("Debe ingresar todos los datos necesarios");
    }
    if (lisProd.length == 0){
        throw new Error("Debe ingresar lista con un producto por lo menos");
    }
    this.listaProductos = lisProd;
}

PaqueteSimple.prototype = Object.create(Paquete.prototype);
PaqueteSimple.prototype.constructor = PaqueteSimple;

module.exports = PaqueteSimple;