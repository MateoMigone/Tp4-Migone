const Reloj = require("./Reloj");

var reloj;
beforeEach(function () {
    reloj = new Reloj();
});


test("crear reloj", () => {
    expect(reloj.tiempo).toBe(0);
});

test("avanzar unidad de tiempo", () => {
    reloj.avanzarTiempo();
    expect(reloj.tiempo).toBe(1);
});