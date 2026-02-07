// 🎮 RETRO ARCADE - GAME REGISTRY
// Add your games here and they'll automatically appear on the main hub!

const GAMES = [
    {
        id: 'example-game',
        title: 'PIXEL RUNNER',
        description: 'A fast-paced retro platformer',
        logo: 'assets/games/pixel-runner/logo.png',
        path: 'games/pixel-runner/index.html',
        color: '#ff00ff', // Neon accent color
        year: '2024'
    },
    {
        id: 'space-invaders',
        title: 'SPACE INVADERS',
        description: 'Classic arcade shooter',
        logo: 'assets/games/space-invaders/logo.png',
        path: 'games/space-invaders/index.html',
        color: '#00ffff',
        year: '2024'
    },
    {
        id: 'snake-deluxe',
        title: 'SNAKE DELUXE',
        description: 'The classic snake game reimagined',
        logo: 'assets/games/snake-deluxe/logo.svg',
        path: 'games/snake-deluxe/index.html',
        color: '#00ff00',
        year: '2024'
    }
    // 🎯 ADD MORE GAMES HERE - Just copy the format above!
];

// Get game by ID
function getGameById(id) {
    return GAMES.find(game => game.id === id);
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GAMES, getGameById };
}
