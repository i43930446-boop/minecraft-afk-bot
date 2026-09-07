const mineflayer = require('mineflayer');

const options = {
  host: 'localhost', // Promeni na server adresu
  port: 25565,
  username: 'FlameFrags1',
  version: '1.20.1' // Promeni verziju ako je potrebno
};

const bot = mineflayer.createBot(options);

bot.on('login', () => {
  console.log('✓ Ulogovan na server!');
  
  // Čekaj malo pa registruj se
  setTimeout(() => {
    bot.chat('/register FlameFrags1 Flamefrags1');
    console.log('✓ Poslata registracija komanda!');
  }, 2000);
});

bot.on('message', (message) => {
  const msg = message.toString();
  console.log(`[Chat] ${msg}`);
  
  // Ako se vidi poruka o uspešnoj registraciji
  if (msg.includes('registered') || msg.includes('Registered')) {
    console.log('✓ Registracija uspešna!');
  }
});

bot.on('error', (err) => {
  console.error('❌ Greška:', err);
});

bot.on('end', () => {
  console.log('Bot je odspojио');
});

// Sprečavanje AFK kicka - mali periodic klik
setInterval(() => {
  bot.setControlState('jump', true);
  setTimeout(() => {
    bot.setControlState('jump', false);
  }, 100);
}, 30000); // Svaki 30 sekundi

console.log('🚀 Pokretanje Minecraft AFK bota...');
