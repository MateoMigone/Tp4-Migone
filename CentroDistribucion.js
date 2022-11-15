const Centro = require('./Centro');

function CentroDistribucion(capCol){
    Centro.call(this,capCol);
    if (capCol < 10 || capCol > 30){
        throw new Error("Capacidad de cola debe ser entre 10 y 30");
    }
    if (capCol === undefined){
        throw new Error("Debe ingresar capacidad de cola");
    }
    this.capacidadProcesamiento = 10;
}

CentroDistribucion.prototype = Object.create(Centro.prototype);
CentroDistribucion.prototype.constructor = CentroDistribucion;

module.exports = CentroDistribucion;