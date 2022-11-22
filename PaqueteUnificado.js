const Paquete = require('./Paquete');

function PaqueteUnificado (paquetes){
    Paquete.call(this);
    this.listaPaquetes = [];
    this.destino = paquetes[0].destino;
}

PaqueteUnificado.prototype = Object.create(Paquete.prototype);
PaqueteUnificado.prototype.constructor = PaqueteUnificado;

module.exports = PaqueteUnificado;