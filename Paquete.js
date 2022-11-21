function Paquete (dest,lisProd,urg){
    if (dest === undefined || lisProd === undefined || urg === undefined){
        throw new Error("Debe ingresar todos los datos necesarios");
    }
    if (lisProd.length == 0){
        throw new Error("Debe ingresar lista con un producto por lo menos");
    }
    // if (isNaN(Paquete.prototype.numero)){
    //     Paquete.prototype.numero = 0;
    // }
    this.destino = dest;
    this.listaProductos = lisProd;
    this.urgencia = urg;
    this.numero = Paquete.prototype.numero++;
}

module.exports = Paquete;