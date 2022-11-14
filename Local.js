const Paquete = require("./Paquete");

function Local(nom){
    this.nombre = nom;
    this.colaSalida = [];
    this.generarPaquete = function (destino,listaProductos,urgencia){
        if (isNaN(Paquete.prototype.numero)){
            Paquete.prototype.numero = 0;
        }
        paquete = new Paquete(destino,listaProductos,urgencia);
        this.colaSalida.push(paquete);
    };
    this.pasarPaquete = function(paquete,centro){
        this.colaSalida.shift();
        centro.colaEntrada.push(paquete);
    }
}

module.exports = Local;