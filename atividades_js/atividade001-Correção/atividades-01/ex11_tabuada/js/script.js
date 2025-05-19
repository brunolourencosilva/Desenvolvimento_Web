document.addEventListener('DOMContentLoaded', function () {
    const inputNumero = document.getElementById('numero');
    const botaoGerar = document.getElementById('gerar');
    const listaResultado = document.getElementById('resultado-tabuada');

    botaoGerar.addEventListener('click', function () {
        const numero = parseInt(inputNumero.value, 10);
        listaResultado.innerHTML = '';

        if (isNaN(numero)) {
            const li = document.createElement('li');
            li.textContent = 'Digite um número válido.';
            listaResultado.appendChild(li);
            return;
        }

        for (let i = 1; i <= 10; i++) {
            const li = document.createElement('li');
            li.textContent = `${numero} x ${i} = ${numero * i}`;
            listaResultado.appendChild(li);
        }
    });
});
