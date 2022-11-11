function CentroFacturacion(capCol){
    this.capacidadProcesamiento = 3;
    this.capacidadCola = capCol;
    this.colaEntrada = [];
    this.colaSalida = [];
    this.recibirPaquete = function(paquete){
        this.colaEntrada.push(paquete);
    }
    this.procesarPaquetes = function(){
        let p1 = this.colaSalida.shift();
        let p2 = this.colaSalida.shift();
        let p3 = this.colaSalida.shift();
        let p4 = this.colaSalida.shift();
        let p5 = this.colaSalida.shift();

        this.colaEntrada = [p1,p4];
        this.colaSalida = [p5,p2,p3];
    }

}

module.exports = CentroFacturacion;