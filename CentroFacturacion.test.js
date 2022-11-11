test("crear centro facturacion ", () => {
    centroFacturacion = new CentroFacturacion();
    expect(centroFacturacion.capacidadProcesamiento).toBe(3);
});