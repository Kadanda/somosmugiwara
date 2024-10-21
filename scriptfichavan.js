const pontosIniciais = 3;

const form = document.getElementById('form-habilidades');

habilidadesDesvantagens.forEach(habilidade => {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'habilidades';
    input.value = habilidade.pontos;
    input.onchange = calcularPontos;
    label.appendChild(input);
    label.appendChild(document.createTextNode(`${habilidade.nome} (${habilidade.pontos > 0 ? '+' : ''}${habilidade.pontos} pontos)`));
    form.appendChild(label);
    form.appendChild(document.createElement('br'));
});

function calcularPontos() {
    const checkboxes = document.querySelectorAll('input[name="habilidades"]:checked');
    let totalPontos = pontosIniciais;
    let habilidadesSelecionadas = '';

    checkboxes.forEach((checkbox) => {
        totalPontos += parseInt(checkbox.value);
        const habilidade = habilidadesDesvantagens.find(h => h.nome === checkbox.parentElement.textContent.split('(')[0].trim());
        if (habilidade) {
            habilidadesSelecionadas += `${habilidade.nome} (${habilidade.pontos > 0 ? '+' : ''}${habilidade.pontos} pontos): ${habilidade.descricao}\n\n`;
        }
    });

    document.getElementById('total-pontos').textContent = totalPontos;
    document.getElementById('habilidades-selecionadas').value = habilidadesSelecionadas;
}

// Inicializar com os pontos gratuitos
document.getElementById('total-pontos').textContent = pontosIniciais;
