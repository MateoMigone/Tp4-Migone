const Reloj = require('./Reloj');

function Centro(capCol){
    this.capacidadProcesamiento;
    this.capacidadCola = capCol;
    this.colaEntrada = [];
    this.colaSalida = [];
    this.recibirPaquete = function(paquete){
        if(this.espacioEnCola() != 0){
            this.colaEntrada.push(paquete);
        }
        
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
    this.pasarPaquetes = function(centro,reloj){
        this.colaSalida.sort((a, b) => a.urgencia - b.urgencia);
        for(let i = this.colaSalida.length; this.colaSalida.length != 0; i--){
            if(centro === undefined){
                let paqueteEntregado = this.colaSalida.shift();
                paqueteEntregado.tiempoFinal = reloj.tiempo;
                console.log(paqueteEntregado.llegoEnTiempo());
            }
            else{
                centro.recibirPaquete(this.colaSalida.shift())
            }
        }
    }
    
}

module.exports = Centro;