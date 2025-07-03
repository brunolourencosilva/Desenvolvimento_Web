document.addEventListener('DOMContentLoaded', function () {

    const verificarEntrada = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

    verificarEntrada.addEventListener('click', function () {
        const A = parseFloat(document.getElementById('valor1').value);
        const B = parseFloat(document.getElementById('valor2').value);
        const C = parseFloat(document.getElementById('valor3').value);
        const delta = B ** 2 - 4 * A * C

    function raizQuadrada(n) {
      let x = n;
      let y = 1;
      let e = 0.000001;
      while (x - y > e) {
        x = (x + y) / 2;
        y = n / x;
      }
      return x;
    }
    
    const raizDelta = raizQuadrada(delta);

    const x1 = (-B + raizDelta) / (2 * A);
    const x2 = (-B - raizDelta) / (2 * A);

    resultado.innerHTML = `
    <p>Dados oferecidos: 𝑥²−6𝑥+5<br><br></p>
    <p>A = ${A}, B = ${B}. C = ${C}<br><br></p>
    <p><b>Descobrindo o delta:</b><br><br></p>
    <p>Formula: Δ = b² - 4ac = <br><br></p>
    <p>Substituindo: Δ = (${B})² - 4 * ${A} * ${C} = ${delta}<br><br></p>
    <p><b>Descobrindo a raiz do delta:</b><br><br></p>
    <p>Formula: x = -b² ± √Δ / 2 * a<br><br></p>
    <p>Substituindo: x = -(${B})² ± √${delta} / 2 = ${raizDelta.toFixed(0)}<br><br></p>
    <p><b>Descobrindo as raizes do X:</b><br><br></p>
    <p>x' = (-${B} + √${delta}) / (2 × ${A}) = ${x1.toFixed(0)}</p>
    <p>x" = (-${B} - √${delta}) / (2 × ${A}) = ${x2.toFixed(0)}<br><br></p>
    <p><b>As raízes da equação são:<br><br></p>
    <p>x' = ${x1.toFixed(0)}</p>
    <p>x" = ${x2.toFixed(0)}</p>`;
    });
});