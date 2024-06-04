document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var comidas = [];
    var bebidas = [];

    document.querySelectorAll('input[name="comida"]:checked').forEach(function(checkbox) {
        comidas.push(checkbox.value);
    });

    document.querySelectorAll('input[name="bebida"]:checked').forEach(function(checkbox) {
        bebidas.push(checkbox.value);
    });

    var dados = {
        "nome": nome,
        "telefone": telefone,
        "comidas": comidas,
        "bebidas": bebidas
    };

    var jsonData = JSON.stringify(dados);
    var blob = new Blob([jsonData], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    
    var a = document.createElement('a');
    a.href = url;
    a.download = 'dados_usuario.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

function verLista() {
    window.location.href = 'lista.html';
}
