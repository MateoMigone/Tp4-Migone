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
        var respuesta;
        x >= 0 ? respuesta = "El paquete " + this.numero + " llegó a tiempo"
        : respuesta = "El paquete " + this.numero + " llega " + x*(-1) + " unidad/es tarde";
        
        return respuesta; 
    }
}

module.exports = Paquete;