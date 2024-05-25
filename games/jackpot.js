function initJackpot() {
    const jackpotContainer = document.getElementById('jackpot-game');
    jackpotContainer.innerHTML = `
        <button id="spin-jackpot">Girar Jackpot</button>
        <p id="jackpot-result"></p>
    `;

    document.getElementById('spin-jackpot').addEventListener('click', function() {
        const symbols = ['🍒', '🍋', '🍊', '🍇', '⭐', '🔔'];
        const randomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];
        const result = [randomSymbol(), randomSymbol(), randomSymbol()];
        document.getElementById('jackpot-result').textContent = `Resultado: ${result.join(' ')}`;
    });
}
