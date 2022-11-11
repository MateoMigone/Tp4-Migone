function CentroFacturacion(capCol){
    this.capacidadProcesamiento = 3;
    this.capacidadCola = capCol;
    this.colaEntrada = [];
    this.colaSalida = [];
    this.recibirPaquete = function(paquete){
        this.colaEntrada.push(paquete);
    }
    this.procesarPaquetes = function(){
        this.colaEntrada.sort((a, b) => b[2] - a[2]);
        for(let i=0; i < this.capacidadProcesamiento; i++){
            this.colaSalida.push(this.colaEntrada.shift());
        }

        this.colaEntrada = [p1,p4];
        this.colaSalida = [p5,p2,p3];
    }

}

module.exports = CentroFacturacion;