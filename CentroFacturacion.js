const Centro = require('./Centro');

function CentroFacturacion(capCol){
    Centro.call(this,capCol);
    if (capCol < 3 || capCol > 6){
        throw new Error("Capacidad de cola debe ser entre 3 y 6");
    }
    if (capCol === undefined){
        throw new Error("Debe ingresar capacidad de cola");
    }
    this.capacidadProcesamiento = 3;
}

CentroFacturacion.prototype = Object.create(Centro.prototype);
CentroFacturacion.prototype.constructor = CentroFacturacion;

module.exports = CentroFacturacion;