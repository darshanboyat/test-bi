const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});
client.on('message', message => {
    const content = message.body
	if(content === '/options') {
		client.sendMessage(message.from, 'Press 1 to send mail at CEO\'s id');
		client.sendMessage(message.from, 'Press 2 to send mail at Career\'s id');
	}
    else if(content === '1') {
        client.sendMessage(message.from, "sufiyan@braininventory.com")
    }
    else if(content === "2"){
        client.sendMessage(message.from, "career@braininventory.com")
    }
});
 

client.initialize();
