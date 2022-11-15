test("crear reloj", () => {
    reloj = new Reloj();
    expect(reloj.tiempo).toBe(0);
});