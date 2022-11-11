function CentroFacturacion(capCol){
    this.capacidadProcesamiento = 3;
    this.capacidadCola = capCol;
    this.colaEntrada = [];
    this.colaSalida = [];
}

module.exports = CentroFacturacion;