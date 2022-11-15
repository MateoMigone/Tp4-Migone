function Reloj(){
    this.tiempo = 0;
    this.avanzarTiempo = function (){
        this.tiempo ++;
    }
}

module.exports = Reloj;