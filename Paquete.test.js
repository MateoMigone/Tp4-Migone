test("crear paquete", () => {
    paquete = new Paquete(1)
    expect (paquete.destino()).toBe(1);
});