const itens = [
  { nome: 'Granola Artesanal', preco: 18.50,id:"alimento"},
  { nome: 'Mel Pura', preco: 22.00,id:"alimento" },
  { nome: 'Shapoo Organico', preco: 25.00,id:"cosmetico" },
  { nome: 'Shapoo Natural', preco: 15.00,id:"cosmetico" }
];

document.addEventListener("DOMContentLoaded", function(){

  document.getElementById('Select').addEventListener('change', function() {
      const AlimentosItens = itens.filter(function(alimento) {
          return alimento.id == "alimento";
      });

      document.getElementById('produtos').innerHTML = `<strong>${JSON.stringify(AlimentosItens)}</strong>`;
  });
});

