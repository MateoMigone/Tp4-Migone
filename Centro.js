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
    this.pasarPaquetes = function(centro){
        this.colaSalida.sort((a, b) => a.urgencia - b.urgencia);
        for(let i = this.colaSalida.length; this.colaSalida.length != 0; i--){
            centro.recibirPaquete(this.colaSalida.shift());
            
        }
    }
}

module.exports = Centro;