document.addEventListener('DOMContentLoaded', function () {

    const verificarEntrada = document.getElementById('verificar');
    const resultado = document.getElementById('resultado');

  // Ao clicar no botão "verificarEntrada", executa o cálculo de Bhaskara
  verificarEntrada.addEventListener('click', () => {
      // Captura os valores digitados e converte para número com ponto flutuante
      const A = parseFloat(document.getElementById('valor1').value);
      const B = parseFloat(document.getElementById('valor2').value);
      const C = parseFloat(document.getElementById('valor3').value);

      // Cálculo do discriminante (delta)
      const delta = B ** 2 - 4 * A * C;

      // Função personalizada para calcular raiz quadrada usando o método de Newton
      function raizQuadrada(n) {
          let x = n;
          let y = 1;
          const e = 0.000001; // Precisão da aproximação
          while (x - y > e) {
              x = (x + y) / 2;
              y = n / x;
          }
          return x;
      }

      // Se o delta for negativo, a equação não possui raízes reais
      if (delta < 0) {
          resultado.innerHTML = `
              <p>A = ${A}, B = ${B}, C = ${C}</p>
              <p>Δ = ${delta} → Não existem raízes reais.</p>
          `;
          return;
      }

      // Cálculo da raiz quadrada de delta (√Δ)
      const raizDelta = raizQuadrada(delta);

      // Fórmulas de Bhaskara: x' e x"
      const x1 = (-B + raizDelta) / (2 * A);
      const x2 = (-B - raizDelta) / (2 * A);

      // Exibição detalhada dos cálculos com explicações
      resultado.innerHTML = `
          <p><b>Dados fornecidos:</b> A = ${A}, B = ${B}, C = ${C}</p>
          <p><b>1. Cálculo do Δ:</b></p>
          <p>Δ = b² - 4ac = (${B})² - 4 × ${A} × ${C} = ${delta}</p>

          <p><b>2. Raiz quadrada de Δ:</b> √${delta} ≈ ${raizDelta.toFixed(2)}</p>

          <p><b>3. Fórmula de Bhaskara:</b></p>
          <p>x' = (-${B} + √${delta}) / (2 × ${A}) = ${x1.toFixed(2)}</p>
          <p>x" = (-${B} - √${delta}) / (2 × ${A}) = ${x2.toFixed(2)}</p>

          <p><b>Raízes da equação:</b></p>
          <p>x' = ${x1.toFixed(2)}</p>
          <p>x" = ${x2.toFixed(2)}</p>
      `;
  });
});