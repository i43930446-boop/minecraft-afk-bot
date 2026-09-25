const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'RavageSMP.aternos.me:37712',
    port: 25565,
    username: 'Player67',
    version: '1.21.11'
  });

  bot.on('spawn', () => {
    console.log('Player1 je usao na server!');

    setTimeout(() => {
      bot.chat('/register FlameFrags61 FlameFrags61');
    }, 3000);

    setTimeout(() => {
      bot.chat('/login FlameFrags61');
    }, 6000);
  });

  bot.on('end', () => {
    console.log('Bot se diskonektovao. Ponovno povezivanje za 10 sekundi...');
    setTimeout(startBot, 10000);
  });

  bot.on('error', (err) => {
    console.log('Bot error:', err.message);
  });
}

startBot();
