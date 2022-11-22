const Paquete = require('./Paquete');

function PaqueteUnificado (paquetes){
    Paquete.call(this,dest,urg);
    this.listaPaquetes = [];
}

PaqueteUnificado.prototype = Object.create(Paquete.prototype);
PaqueteUnificado.prototype.constructor = PaqueteUnificado;

module.exports = PaqueteUnificado;