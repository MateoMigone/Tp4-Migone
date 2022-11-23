const PaqueteSimple = require("./PaqueteSimple");

function Local(nom){
    if(nom === undefined){
        throw new Error("Debe pasarse el nombre del local por parametro al crearlo");
    }

    this.nombre = nom;
    this.colaSalida = [];
    this.capacidadGenerarPaquetes = 5;
    this.generarPaquete = function (destino,listaProductos,urgencia,tiempoInicial){
        if (this.capacidadGenerarPaquetes != 0){
            paquete = new PaqueteSimple(destino,listaProductos,urgencia,tiempoInicial);
            this.colaSalida.push(paquete);
            this.capacidadGenerarPaquetes--;
        }  
    };
    this.pasarPaquetes = function(centro){
        this.colaSalida.sort((a, b) => a.urgencia - b.urgencia);
        for(let i = centro.espacioEnCola(); i != 0 && this.colaSalida.length != 0; i--){
            centro.recibirPaquete(this.colaSalida.shift());
        }
    }
    this.avanzarTiempo= function(centro){
        this.capacidadGenerarPaquetes = 5;
        this.pasarPaquetes(centro);
    }
}

module.exports = Local;