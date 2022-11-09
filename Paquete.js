function Paquete (dest,lisProd){
    if (dest === undefined){
        throw new Error("Debe ingresar destino");
    }
    this.destino = dest;
    this.listaProductos = lisProd;
}

module.exports = Paquete;