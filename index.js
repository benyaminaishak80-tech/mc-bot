const mineflayer = require('mineflayer');

console.log("البوت راه يبدأ ديركا...");

function createBot() {
    const bot = mineflayer.createBot({
        host: 'IHKBN31.aternos.me', // الآيبي المطور الجديد تاعك
        port: 37933,                // البورت تاع السيرفر تاعك
        username: 'GuardBot',    // اسم البوت داخل اللعبة
        version: '26.2'        // نسخة السيرفر تاعك
    });

    bot.on('spawn', () => {
        console.log('البوت دخل ديركا للسيرفر وراه واجد!');
    });

    bot.on('chat', (username, message) => {
        if (username === bot.username) return;
        if (message === '!hello') {
            bot.chat(`مرحباً بك يا ${username}!`);
        }
    });

    bot.on('end', () => {
        console.log('الاتصال انقطع، البوت غادي يعاود يدخل بعد 30 ثانية...');
        setTimeout(createBot, 30000);
    });

    bot.on('error', (err) => {
        console.log('صرا خطأ في الاتصال: ', err.message);
    });
}

createBot();

// السيرفر الوهمي لي يحوس عليه موقع Render دايماً
const http = require('http');
const server = http.createServer((req, res) => {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.end('Bot is running\n');
});
server.listen(8080, () => {
   console.log('Web server is running for Render port binding');
});
