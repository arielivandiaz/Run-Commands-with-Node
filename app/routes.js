
const cmd = require('./commands');

const connections = [];

module.exports = function (app, io) {

	/*
		io.sockets.on('connection', (socket) => {
			connections.push(socket);
			console.log(' %s sockets is connected', connections.length);
	
			socket.on('disconnect', () => {
				connections.splice(connections.indexOf(socket), 1);
			});
	
			socket.on('sending message', (message) => {
				console.log('Message is received :', message);
	
				io.sockets.emit('new message', { message: message });
			});
		});
	*/


	// Index
	app.get('/', function (req, res) {

		res.render('index.ejs', {
			message: 'Hello Node World',
		});
	});

	app.post('/', function (req, res) {


		var log = "";
		io.sockets.emit('new message', { message: "Started" });

		run(cmd.step_1).then((resolve) => {

			log = " Folder Created ";
			console.log(log);
			io.sockets.emit('new message', { message: log });

			run(cmd.step_2).then((resolve) => {

				log = "Inside new Folder";
				console.log(log);
				io.sockets.emit('new message', { message: log });

				run(cmd.step_3).then((resolve) => {

					log = "New File Created";
					console.log(log);
					io.sockets.emit('new message', { message: log });

					run(cmd.step_4).then((resolve) => {

						log = "Backup File Created";
						console.log(log);
						io.sockets.emit('new message', { message: log });
	
					}).catch(function (reject) {
	
						log = "Final Step FAIL";
						console.log(log);
						io.sockets.emit('new message', { message: log });
	
					});

				}).catch(function (reject) {

					log = "Third Step FAIL";
					console.log(log);
					io.sockets.emit('new message', { message: log });

				});

			}).catch(function (reject) {

				log = "Second Step FAIL";
				console.log(log);
				io.sockets.emit('new message', { message: log });

			});

		}).catch(function (reject) {

			log = "First Step FAIL";
			console.log(log);
			io.sockets.emit('new message', { message: log });

		});
	});



}


/*
			
*/