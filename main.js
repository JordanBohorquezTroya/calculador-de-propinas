let montoTotal = document.getElementById("total");
let porcentajePropina = document.getElementById("porcentaje");
let resultado = document.getElementById("resultado");

function ObtenerPropina() {
    let propina = 0;
    propina = parseFloat(montoTotal.value) * (parseFloat(porcentajePropina.value) / 100);
    return propina;
}

function totalaPagar() {
    let total = 0;
    let propina = ObtenerPropina();
    total = parseFloat(montoTotal.value) + propina;
    return total;
}

function calcularPropina() {
    let propina = ObtenerPropina();
    let total = totalaPagar();
    let resultado1 = `Propina: $${propina.toFixed(2)}, Total a Pagar: $${total.toFixed(2)}`
    resultado.innerHTML = resultado1;
}
