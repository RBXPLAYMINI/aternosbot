const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: 'surwme.aternos.me', 
        port: 19931,                 // Змінили порт на Bedrock!
        username: 'bot24_7',        // Замінив '/' на '_' про всяк випадок
        version: false              // Автовизначення версії Bedrock
    })

    bot.on('spawn', () => {
        console.log('Бот успішно зайшов на Bedrock сервер!')
    })

    bot.on('end', () => {
        console.log('Бота відключено. Перезапуск через 10 секунд...')
        setTimeout(createBot, 10000)
    })

    bot.on('error', (err) => {
        console.log('Сталася помилка:', err)
    })
}

createBot()
