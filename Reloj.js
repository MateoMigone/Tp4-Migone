function Reloj(){
    this.tiempo = 0;
    this.avanzarTiempo = function (map){
        this.tiempo ++;
        map.avanzarTiempo(this.tiempo);
    }
}

module.exports = Reloj;