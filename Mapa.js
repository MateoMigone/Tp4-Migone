const Reloj = require('./Reloj');

function Mapa(mat){
    this.matriz = mat;

    this.avanzarTiempo = function(reloj){
        reloj.avanzarTiempo();
        for (let i=this.matriz[0].length; i>0; i--){
            this.matriz[0][i].avanzarTiempo(this.matriz[0][i+1],reloj);
        }
    }
}

module.exports = Mapa;