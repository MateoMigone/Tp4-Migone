const Reloj = require('./Reloj');

function Mapa(mat){
    this.matriz = mat;

    this.avanzarTiempo = function(reloj){
        reloj.avanzarTiempo();
        for (let i=this.matriz[0].length; i>0; i--){
            this.matriz[0][i-1].avanzarTiempo(this.matriz[0][i],reloj.tiempo);
        }
    }
}

module.exports = Mapa;