function CentroFacturacion(capCol){
    if (capCol < 3 || capCol > 6){
        throw new Error("Capacidad de cola debe ser entre 3 y 6");
    }
    if (capCol === undefined){
        throw new Error("Debe ingresar capacidad de cola");
    }

    this.capacidadProcesamiento = 3;
    this.capacidadCola = capCol;
    this.colaEntrada = [];
    this.colaSalida = [];
    this.recibirPaquete = function(paquete){
        this.colaEntrada.push(paquete);
    }
    this.procesarPaquetes = function(){
        this.colaEntrada.sort((a, b) => a.urgencia - b.urgencia);
        for(let i=0; i < this.capacidadProcesamiento; i++){
            this.colaSalida.push(this.colaEntrada.shift());
        }
    }
    this.espacioEnCola = function(){
        return (this.capacidadCola - this.colaEntrada.length - this.colaSalida.length);
    }

}

module.exports = CentroFacturacion;