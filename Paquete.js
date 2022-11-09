function Paquete (dest,lisProd){
    if (dest === undefined){
        throw new Error("Debe ingresar destino");
    }
    if (lisProd === undefined){
        throw new Error("Debe ingresar producto/s");
    }
    this.destino = dest;
    this.listaProductos = lisProd;
}

module.exports = Paquete;