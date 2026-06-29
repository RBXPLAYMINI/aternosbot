const bedrock = require('bedrock-protocol');

// Повністю чисті та стабільні налаштування
const botConfig = {
  host: 'surwme.aternos.me', 
  port: 19931,               
  username: 'AternosBot247', 
  offline: true,             
  skipPing: true,            // Ігноруємо пінг, щоб не було затримок
  connectTimeout: 20000      // Даємо боту більше часу (20 сек) на пробиття мережі
};

function startBot() {
  console.log('===> Запуск бота: Спроба пробити підключення до Атернос...');
  
  try {
    const bot = bedrock.createClient(botConfig);

    bot.on('spawn', () => {
      console.log('🎉 ПЕРЕМОГА! Бот успішно зайшов на сервер і з’явився у грі!');
    });

    bot.on('error', (err) => {
      console.log(`⚠️ Помилка з'єднання: ${err.message}`);
    });

    bot.on('close', () => {
      console.log('🔌 Роботу бота зупинено. Авто-перезапуск через 5 секунд...');
      setTimeout(startBot, 5000);
    });

  } catch (error) {
    console.log(`❌ Критичний збій при створенні: ${error.message}`);
    setTimeout(startBot, 5000);
  }
}

// Запуск нашої системи
startBot();
