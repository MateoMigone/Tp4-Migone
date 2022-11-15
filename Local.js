const Paquete = require("./Paquete");

function Local(nom){
    this.nombre = nom;
    this.colaSalida = [];
    this.capacidadGenerarPaquetes = 5;
    this.generarPaquete = function (destino,listaProductos,urgencia){
        if (this.capacidadGenerarPaquetes != 0){
            paquete = new Paquete(destino,listaProductos,urgencia);
            this.colaSalida.push(paquete);
            this.capacidadGenerarPaquetes--;
        }  
    };
    this.pasarPaquete = function(centro){
        centro.espacioEnCola() != 0 ?
        centro.recibirPaquete(this.colaSalida.shift()):
        centro.demorarReciboPaquete();
    }
}

module.exports = Local;