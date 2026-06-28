const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'IHKBN31.aternos.me', 
        port: 37933,                
        username: 'Bot__ISHAK'
        // تنحى سطر الـ version باش البوت يجيبها وحدو تلقائياً
    });

    bot.on('spawn', () => {
        console.log('البوت دخل للسيرفر بنجاح!');
        
        // Anti-AFK: البوت يقفز كل 30 ثانية باش ما يطردوش السيرفر
        setInterval(() => {
            bot.setControlState('jump', true);
            setTimeout(() => bot.setControlState('jump', false), 500);
        }, 30000);
    });

    bot.on('end', () => {
        console.log('البوت خرج. جاري إعادة الاتصال بعد 30 ثانية...');
        setTimeout(createBot, 30000);
    });

    bot.on('error', (err) => {
        console.log('صرا خطأ في الاتصال: ', err.message);
    });
}

createBot();
const http = require('http');
const server = http.createServer((req, res) => {
   res.writeHead(200, { 'Content-Type': 'text/plain' });
   res.end('Bot is running\n');
});
server.listen(8080, () => {
   console.log('Web server is running for Render port binding');
});
