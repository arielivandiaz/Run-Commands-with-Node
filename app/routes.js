
const { spawn } = require('child_process');
const child = spawn('ls', ['-lh', '/usr']);

// use child.stdout.setEncoding('utf8'); if you want text chunks
child.stdout.on('data', (chunk) => {
  // data from standard output is here as buffers
});

// since these are streams, you can pipe them elsewhere
child.stderr.pipe(dest);

child.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

module.exports = function (app) {
	
	// Index
	app.get('/', function (req, res) {

		res.render('index.ejs', {
			message: 'Hello Node World'
		});
    });

    app.post('/', function (req, res) {

        console.log("User name is : ", req.body.name);

		res.render('welcome.ejs', {
            message: 'Hello Node World',
            name: req.body.name
		});
    });


}
