const Paquete = require('./Paquete');

function PaqueteUnificado (paquetes){
    if(paquetes.length < 2){
        throw new Error("Debe ingresar una lista con dos o mas paquetes");
    }
    Paquete.call(this);
    this.listaPaquetes = [];
    this.destino = paquetes[0].destino;
    this.listaPaquetes.push(paquetes[0]); 
    var urg = paquetes[0].urgencia;
    var tInicial;
    for(i = 1; i < paquetes.length; i++){
        this.listaPaquetes.push(paquetes[i]);
        if (paquetes[i].urgencia < urg){
            urg = paquetes[i].urgencia;
            tInicial = paquetes[i].tiempoInicial;
        }
    }
    this.urgencia = urg;
    this.tiempoInicial = tInicial;
}

PaqueteUnificado.prototype = Object.create(Paquete.prototype);
PaqueteUnificado.prototype.constructor = PaqueteUnificado;

module.exports = PaqueteUnificado;