function Paquete (dest,lisProd,urg){
    if (dest === undefined){
        throw new Error("Debe ingresar destino");
    }
    if (lisProd === undefined){
        throw new Error("Debe ingresar producto/s");
    }
    if (urg === undefined){
        throw new Error("Debe ingresar urgencia");
    }
    this.destino = dest;
    this.listaProductos = lisProd;
    this.urgencia = urg;
}

module.exports = Paquete;