const Paquete = require("./Paquete");

function Local(nom){
    this.nombre = nom;
    this.colaSalida = [];
    this.generarPaquete = function (destino,listaProductos,urgencia){
        if (Paquete.prototype.numero === NaN){
            Paquete.prototype.numero = 0;
        }
        paquete = new Paquete(destino,listaProductos,urgencia);
        this.colaSalida.push(paquete);
    };
}

module.exports = Local;