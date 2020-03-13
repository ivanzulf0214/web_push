self.addEventListener('push', function(e) {
	var options = {
		body: 'Here is a notification body!',
		icon: 'images/example.png',
		vibrate: [100, 50, 100],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: 1
		},
		actions: [
			{
				action: 'explore',
				title: 'Explore this new world',
				icon: 'images/checkmark.png'
			},
			{
				action: 'close',
				title: 'CLose notification',
				icon: 'images/xmark.png'
			}
		]
	};

	e.waitUntil(self.registration.showNotification('Hello World!', options));
});