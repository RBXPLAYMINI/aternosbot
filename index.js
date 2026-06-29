const bedrock = require('bedrock-protocol');

const options = {
  host: '185.107.194.198', // Перевір, чи це актуальна IP-адреса в Атерносі
  port: 19931,             // Перевір, чи це твій поточний порт в Атерносі
  username: 'AternosBot247',
  offline: true            // Це заміняє "Cracked" режим для піратів
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
