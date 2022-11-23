function Paquete (dest,urg){
    if (isNaN(Paquete.prototype.numero)){
        Paquete.prototype.numero = 0;
    }
    this.destino = dest;
    this.urgencia = urg;
    this.numero = Paquete.prototype.numero++;
    this.tiempoInicial;
    this.tiempoFinal;
    this.llegoEnTiempo = function(){
        var x = this.urgencia - (this.tiempoFinal-this.tiempoInicial);
        x >= 0 ? "El paquete " + this.numero + " llegó a tiempo"
        : "El paquete " + this.numero + " llega " + x*(-1) + " unidad/es tarde";
    }
}

module.exports = Paquete;