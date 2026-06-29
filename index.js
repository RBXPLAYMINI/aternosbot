const bedrock = require('bedrock-protocol');

const options = {
  host: 'surwme.aternos.me', // Твоя постійна адреса з Атерноса
  port: 19931,               // Твій поточний порт
  username: 'AternosBot247', // Нікнейм бота
  offline: true,             // Працює як "Cracked" (для піратських серверів)
  version: '1.21.30'         // Протокол підключення для версії 1.26
};

function createBot() {
  console.log('Спроба підключення до Bedrock сервера...');
  
  const client = bedrock.createClient(options);

  client.on('spawn', () => {
    console.log('Бот успішно зайшел на Bedrock сервер і з’явився у грі!');
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
