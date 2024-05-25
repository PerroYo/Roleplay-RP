function initBlackjack() {
    const blackjackContainer = document.getElementById('blackjack-game');
    blackjackContainer.innerHTML = `
        <button id="deal-blackjack">Distribuir Cartas</button>
        <p id="blackjack-result"></p>
    `;

    document.getElementById('deal-blackjack').addEventListener('click', function() {
        const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const randomCard = () => cards[Math.floor(Math.random() * cards.length)];
        const hand = [randomCard(), randomCard()];
        document.getElementById('blackjack-result').textContent = `Mão: ${hand.join(', ')}`;
    });
}
