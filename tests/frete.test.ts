import { calcularFrete } from "../src/frete";

test("deve retornar frete grátis quando valor for maior que 200", () => {
    expect(calcularFrete(250)).toBe(0);
});

test("deve retornar 20 quando valor for menor ou igual a 200", () => {
    expect(calcularFrete(100)).toBe(20);
});