function Paquete (dest,lisProd,urg){
    if (dest === undefined || lisProd === undefined || urg === undefined){
        throw new Error("Debe ingresar todos los datos necesarios");
    }
    if (lisProd.length == 0){
        throw new Error("Debe ingresar lista con un producto por lo menos");
    }
    this.destino = dest;
    this.listaProductos = lisProd;
    this.urgencia = urg;
}

module.exports = Paquete;