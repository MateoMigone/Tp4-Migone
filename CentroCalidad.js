const Centro = require('./Centro');

function CentroCalidad(capCol){
    Centro.call(this,capCol);
    if (capCol < 2 || capCol > 5){
        throw new Error("Capacidad de cola debe ser entre 2 y 5");
    }
    if (capCol === undefined){
        throw new Error("Debe ingresar capacidad de cola");
    }
    this.capacidadProcesamiento = 1;

    this.avanzarTiempo = function(centro,reloj){
        this.procesarPaquetes();
        this.pasarPaquetes(centro,reloj);
    }
}

CentroCalidad.prototype = Object.create(Centro.prototype);
CentroCalidad.prototype.constructor = CentroCalidad;

module.exports = CentroCalidad;