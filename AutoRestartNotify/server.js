bindEventHandler("OnResourceStart", thisResource, (event, resource) => {
	setTimeout(function () {
		var today = new Date();
		var time = today.toLocaleString();
		console.log('[AUTORESTART] ' + '[' + time + '] ' + 'Sucessfully Started. Notifications will begin 4 1/2 hours from now! ');
		InitialWait()
	}, 3000);
});

function InitialWait() {
	setTimeout(function () {
		ThirtyMinutes()
	}, 15300000); //Resource sleeps for 4.5hrs before it begins to notify players!
};

function ThirtyMinutes() {
	setTimeout(function () {
		var today = new Date();
		var time = today.toLocaleString();
		message('[CONSOLE] SERVER RESTART IN 30 MINUTES!');
		console.log('[AUTORESTART] ' + '[' + time + '] ' + 'Player\'s notified of 30 minute restart');
		FifteenMinutes()
	}, 900000); //Resource sleeps for 15 mintues before next announcement
};

function FifteenMinutes() {
	setTimeout(function () {
		var today = new Date();
		var time = today.toLocaleString();
		message('[CONSOLE] SERVER RESTART IN 15 MINUTES!');
		console.log('[AUTORESTART] ' + '[' + time + '] ' + 'Player\'s notified of 15 minute restart');
		TenMinutes()
	}, 900000); //Resource sleeps for 15 mintues before next announcement
};

function TenMinutes() {
	setTimeout(function () {
		var today = new Date();
		var time = today.toLocaleString();
		message('[CONSOLE] SERVER RESTART IN 10 MINUTES!');
		console.log('[AUTORESTART] ' + '[' + time + '] ' + 'Player\'s notified of 10 minute restart');
		FiveMinutes()
	}, 300000); //Resource sleeps for 5 mintues before next announcement
};

function FiveMinutes() {
	setTimeout(function () {
		var today = new Date();
		var time = today.toLocaleString();
		message('[CONSOLE] SERVER RESTART IN 5 MINUTES!');
		console.log('[AUTORESTART] ' + '[' + time + '] ' + 'Player\'s notified of 5 minute restart');
		FourMinutes()
	}, 300000); //Resource sleeps for 1 mintue before next announcement
};

function FourMinutes() {
	setTimeout(function () {
		var today = new Date();
		var time = today.toLocaleString();
		message('[CONSOLE] SERVER RESTART IN 4 MINUTES!');
		console.log('[AUTORESTART] ' + '[' + time + '] ' + 'Player\'s notified of 4 minute restart');
		ThreeMinutes()
	}, 60000); //Resource sleeps for 1 mintue before next announcement
};

function ThreeMinutes() {
	setTimeout(function () {
		var today = new Date();
		var time = today.toLocaleString();
		message('[CONSOLE] SERVER RESTART IN 3 MINUTES!');
		console.log('[AUTORESTART] ' + '[' + time + '] ' + 'Player\'s notified of 3 minute restart');
		TwoMinutes()
	}, 60000); //Resource sleeps for 1 mintue before next announcement
};

function TwoMinutes() {
	setTimeout(function () {
		var today = new Date();
		var time = today.toLocaleString();
		message('[CONSOLE] SERVER RESTART IN 2 MINUTES!');
		console.log('[AUTORESTART] ' + '[' + time + '] ' + 'Player\'s notified of 2 minute restart');
		OneMinute()
	}, 60000); //Resource sleeps for 1 mintue before next announcement
};

function OneMinute() {
	setTimeout(function () {
		var today = new Date();
		var time = today.toLocaleString();
		message('[CONSOLE] SERVER RESTART IN 1 MINUTE!');
		console.log('[AUTORESTART] ' + '[' + time + '] ' + 'Player\'s notified of 1 minute restart');
	}, 60000); //Resource sleeps for 1 mintue before next announcement
};
