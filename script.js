function sortInitiative() {
    let players = Array.from(document.querySelectorAll('.player'));
    players.sort((a, b) => parseInt(b.querySelector('input[type="number"]').value) - parseInt(a.querySelector('input[type="number"]').value));
    let gridContainer = document.querySelector('#grid-container');
    players.forEach(player => gridContainer.appendChild(player)); // Reorder DOM elements
}

function nextTurn() {
    let players = Array.from(document.querySelectorAll('.player'));
    if (players.length > 0) {
        let firstPlayer = players.pop();
        let gridContainer = document.querySelector('#grid-container');
        gridContainer.insertBefore(firstPlayer, gridContainer.firstChild); // Move first player to beginning of list
    }
}

function addMonster() {
    let npcInput = document.getElementById('npcInput').value.trim();

    if (npcInput === '') {
        alert('Por favor, insira o nome e a iniciativa do monstro.');
        return;
    }

    // Separando o nome e a iniciativa usando split por vírgula
    let npcData = npcInput.split(',');
    let npcName = npcData[0].trim();
    let npcInitiative = parseInt(npcData[1].trim());

    if (isNaN(npcInitiative)) {
        alert('Valor de iniciativa inválido.');
        return;
    }

    // Criando elementos para exibir o NPC na lista
    let npcContainer = document.createElement('div');
    npcContainer.classList.add('player');
    npcContainer.style.setProperty('--grid-column', 'auto'); // Coluna automática no grid
    npcContainer.style.setProperty('--grid-row', 'auto'); // Linha automática no grid
    npcContainer.innerHTML = `
        <input type="text" value="${npcName}" disabled>
        <input type="number" value="${npcInitiative}" disabled>
    `;

    // Adicionando o NPC ao grid
    document.getElementById('grid-container').appendChild(npcContainer);

    // Limpar o campo de entrada após adicionar o NPC
    document.getElementById('npcInput').value = '';
}
