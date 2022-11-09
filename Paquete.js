function Paquete (dest){
    if (dest === null){
        throw new Error("Debe ingresar destino");
    }
    this.destino = dest;
}

module.exports = Paquete;