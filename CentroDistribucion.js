const Centro = require('./Centro');
const PaqueteUnificado = require('./PaqueteUnificado');

function CentroDistribucion(capCol){
    Centro.call(this,capCol);
    if (capCol < 10 || capCol > 30){
        throw new Error("Capacidad de cola debe ser entre 10 y 30");
    }
    if (capCol === undefined){
        throw new Error("Debe ingresar capacidad de cola");
    }

    this.capacidadProcesamiento = 10;
    
    this.unificarPaquetes = function(){
        lisDestinos = obtenerDestinosDeColaEntrada(this.colaEntrada);
        listaAux = obtenerListaDePaquetesAUnificar(this.colaEntrada,lisDestinos);
        for (let i=0; i<listaAux.length; i++){
            listaAux.legth<2 ? listaAux.push(listaAux.shift()[0]) 
            : listaAux.push(new PaqueteUnificado(listaAux.shift()));
        }
        this.colaEntrada = listaAux;
    }

    var obtenerDestinosDeColaEntrada = function (colaEntrada){
        colaEntrada.sort((a, b) => a.destino - b.destino);
        destinos = [];

        for(let i=0; i<colaEntrada.length; i++){
            if(!destinos.includes(colaEntrada[i].destino)){
                destinos.push(colaEntrada[i].destino);
            }
        }

        return destinos;
    }

    var obtenerListaDePaquetesAUnificar = function (colaEntrada,lisDestinos){
        aux = [];
        colaAux = [];

        for(let i=0; i<lisDestinos.length; i++){
            aux = [];
            for(let j=0; j<colaEntrada.length ; j++){
                if(colaEntrada[j].destino == lisDestinos[i]){
                    aux.push(colaEntrada[j]);
                }
            }
            colaAux.push(aux);
        }

        return colaAux;
    }
}

CentroDistribucion.prototype = Object.create(Centro.prototype);
CentroDistribucion.prototype.constructor = CentroDistribucion;

module.exports = CentroDistribucion;