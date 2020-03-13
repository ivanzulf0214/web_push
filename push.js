var push = require('web-push');

let vapidKeys = { 
	publicKey: 'BMLME1iOpyY0m3h0cxYHhIoOY0d2Jl26qa9JY-c4x6g9d6CEMpvwcuRZLH6BILuryBj0vPOATL-D_Aqq75FrCk4',
  	privateKey: 'rbOvZO528oxi6aJ-KPiHqjRaP4lkm1Yl02DNweucexg' 
}

push.setVapidDetails('mailto:ivanda.zulfikar@fdvs.io', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
	"endpoint":"https://fcm.googleapis.com/fcm/send/ds8bIUMpaaE:APA91bE25aHDGmyQDY_UwG0suF_MsdYCKo_PTr7M5G1CDEft8Ilvd24ZCsTeKLBC5oW_DQP065WD1OrR2auICsvP5xQzMRVNs4KQvJdqZ9G8n9JtZIBVFAliJXjnZpi9our635ouE7tJ",
	"expirationTime":null,
	"keys":{
		"p256dh":"BLfJNKgA_v1cM1t3wdtQW2PD7uPEbdpGzXbkTuqEuEleY0cRh9Kfzz8hi_pIDkw_rUPoYoRlAbJ0JctBy3UIenc",
		"auth":"DxMVaFeM8nozxtwE4xlsFw"
	}
};

push.sendNotification(sub, 'test message');
