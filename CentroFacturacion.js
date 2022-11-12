function CentroFacturacion(capCol){
    this.capacidadProcesamiento = 3;
    this.capacidadCola = capCol;
    this.colaEntrada = [];
    this.colaSalida = [];
    this.recibirPaquete = function(paquete){
        this.colaEntrada.push(paquete);
    }
    this.procesarPaquetes = function(){
        this.colaEntrada.sort((a, b) => a[2] - b[2]);
        for(let i=0; i < this.capacidadProcesamiento; i++){
            this.colaSalida.push(this.colaEntrada.shift());
        }
    }

}

module.exports = CentroFacturacion;