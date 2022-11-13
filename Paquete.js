function Paquete (dest,lisProd,urg){
    if (dest === undefined || lisProd === undefined || urg === undefined){
        throw new Error("Debe ingresar todos los datos necesarios");
    }
    this.destino = dest;
    this.listaProductos = lisProd;
    this.urgencia = urg;
}

module.exports = Paquete;