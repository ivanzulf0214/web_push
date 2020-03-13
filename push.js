var push = require('web-push');

let vapidKeys = { 
	publicKey: 'BMLME1iOpyY0m3h0cxYHhIoOY0d2Jl26qa9JY-c4x6g9d6CEMpvwcuRZLH6BILuryBj0vPOATL-D_Aqq75FrCk4',
  	privateKey: 'rbOvZO528oxi6aJ-KPiHqjRaP4lkm1Yl02DNweucexg' 
}

push.setVapidDetails('mailto:ivanda.zulfikar@fdvs.io', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {};

push.sendNotification(sub, 'test message');
