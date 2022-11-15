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
    this.pasarPaquetes = function(centro){
        this.colaSalida.sort((a, b) => a.urgencia - b.urgencia);
        for(let i = centro.espacioEnCola(); i != 0; i--){
            centro.recibirPaquete(this.colaSalida.shift());
        }
    }
}

module.exports = Local;