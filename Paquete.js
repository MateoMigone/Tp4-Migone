function Paquete (dest,urg){
    if (isNaN(Paquete.prototype.numero)){
        Paquete.prototype.numero = 0;
    }
    this.destino = dest;
    this.urgencia = urg;
    this.numero = Paquete.prototype.numero++;
}

module.exports = Paquete;