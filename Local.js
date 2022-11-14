const Paquete = require("./Paquete");

function Local(nom){
    this.nombre = nom;
    this.colaSalida = [];
    this.generarPaquete = function (destino,listaProductos,urgencia){
        paquete = new Paquete(destino,listaProductos,urgencia);
        this.colaSalida.push(paquete);
    };
    this.pasarPaquete = function(centro){
        centro.colaEntrada.push(this.colaSalida.shift());
    }
}

module.exports = Local;