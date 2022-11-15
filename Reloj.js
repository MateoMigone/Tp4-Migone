function Reloj(){
    this.tiempo = 0;
    this.avanzarTiempo = function (){
        this.tiempo = 1;
    }
}

module.exports = Reloj;