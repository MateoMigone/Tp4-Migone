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
        this.colaEntrada.sort((a, b) => a.destino - b.destino);
        destinos = [];

        for(let i=0; i<this.colaEntrada.length; i++){
            if(!destinos.includes(this.colaEntrada[i].destino)){
                destinos.push(this.colaEntrada[i].destino);
            }
        }

        listaAux = obtenerListaDePaquetesAUnificar(destinos);
        for (let i=0; i<listaAux.length; i++){
            listaAux.legth<2 ? listaAux.push(listaAux.shift()[0]) 
            : listaAux.push(new PaqueteUnificado(listaAux.shift()));
        }
        this.colaEntrada = listaAux;
    }

    var obtenerDestinosDeColaEntrada = function (){
        
    }

    var obtenerListaDePaquetesAUnificar = function (lisDestinos){
        aux = [];
        colaAux = [];

        for(let i=0; i<lisDestinos.length; i++){
            aux = [];
            for(let j=0; j<this.colaEntrada.length ; j++){
                if(this.colaEntrada[j].destino == lisDestinos[i]){
                    aux.push(this.colaEntrada[j]);
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