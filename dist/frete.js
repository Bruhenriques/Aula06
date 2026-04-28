"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularFrete = calcularFrete;
function calcularFrete(valor) {
    if (valor > 200) {
        return 0;
    }
    else {
        return 20;
    }
}
console.log(calcularFrete(250));
console.log(calcularFrete(100));
