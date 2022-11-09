function Paquete (dest){
    if (dest === undefined){
        throw new Error("Debe ingresar destino");
    }
    this.destino = dest;
}

module.exports = Paquete;