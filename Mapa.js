const Reloj = require('./Reloj');

function Mapa(mat){
    this.matriz = mat;

    this.avanzarTiempo = function(reloj){
        reloj.avanzarTiempo();
        this.matriz[0][0].avanzarTiempo(this.matriz[0][1],reloj.tiempo);
        // for (let i=(this.matriz[0].length)-1; i>=0; i--){
        //     this.matriz[0][i].avanzarTiempo(this.matriz[0][i+1],reloj.tiempo);
        // }
    }
}

module.exports = Mapa;