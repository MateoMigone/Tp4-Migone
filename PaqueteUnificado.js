const Paquete = require('./Paquete');

function PaqueteUnificado (paquetes){
    Paquete.call(this);
    this.listaPaquetes = [];
    this.destino = paquetes[0].destino;
    this.listaPaquetes.push(paquetes[0]); 
    var urg = paquetes[0].urgencia;
    for(i = 1; i < paquetes.length; i++){
        this.listaPaquetes.push(paquetes[i]);
        if (paquetes[i].urgencia < urg){
            urg = paquetes[i].urgencia
        }
    }
    this.urgencia = urg;
}

PaqueteUnificado.prototype = Object.create(Paquete.prototype);
PaqueteUnificado.prototype.constructor = PaqueteUnificado;

module.exports = PaqueteUnificado;