const Reloj = require('./Reloj');

function Mapa(mat){
    this.matriz = mat;

    this.avanzarTiempo = function(tiempoActual){
        for (let i=3; i>=0; i--){
            this.matriz[0][i].avanzarTiempo(this.matriz[0][i+1],tiempoActual);
        }
    }
}

module.exports = Mapa;