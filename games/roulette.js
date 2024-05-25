function initRoulette() {
    const rouletteContainer = document.getElementById('roulette-game');
    rouletteContainer.innerHTML = `
        <button id="spin-roulette">Girar a Roleta</button>
        <p id="roulette-result"></p>
    `;

    document.getElementById('spin-roulette').addEventListener('click', function() {
        const result = Math.floor(Math.random() * 37);
        document.getElementById('roulette-result').textContent = `Resultado: ${result}`;
    });
}
