function CentroFacturacion(capCol){
    this.capacidadProcesamiento = 3;
    this.capacidadCola = capCol;
    this.colaEntrada = [];
    this.colaSalida = [];
    this.recibirPaquete = function(paquete){
        this.colaEntrada.push(paquete);
    }
    this.procesarPaquetes = function(){
        let p1 = this.colaEntrada.shift();
        let p2 = this.colaEntrada.shift();
        let p3 = this.colaEntrada.shift();
        let p4 = this.colaEntrada.shift();
        let p5 = this.colaEntrada.shift();

        this.colaEntrada = [p1,p4];
        this.colaSalida = [p5,p2,p3];
    }

}

module.exports = CentroFacturacion;