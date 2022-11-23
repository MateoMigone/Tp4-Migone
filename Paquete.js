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
        return x >= 0; 
    }
}

module.exports = Paquete;