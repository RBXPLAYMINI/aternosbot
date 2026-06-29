const bedrock = require('bedrock-protocol');

const options = {
  host: 'surwme.aternos.me', // Текстова адреса (бот сам знайде правильний IP)
  port: 19931,               // Твій порт з Атерноса
  username: 'AternosBot247', 
  offline: true,             
  skipPing: true,            // ПРОПУСКАЄМО ПІНГ, щоб не було помилки Ping timed out!
  version: '1.21.30'         
};

function createBot() {
  console.log('Спроба підключення до Bedrock сервера...');
  
  const client = bedrock.createClient(options);

  client.on('spawn', () => {
    console.log('Бот успішно зайшов на Bedrock сервер і з’явився у грі!');
  });

  client.on('error', (err) => {
    console.log(`Сталася помилка: ${err.message}`);
  });

  client.on('close', () => {
    console.log('Бота відключено від сервера. Перезапуск через 10 секунд...');
    setTimeout(createBot, 10000);
  });
}

createBot();
