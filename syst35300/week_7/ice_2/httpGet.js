const http = require('http');
const options = { host: '127.0.0.1',
				  port: 8887,
				  path: '/?name=Ben%20Ahola&lName=Ahola',
				  method: 'GET' };

const req = http.request(options, (res) => {
	res.on('data', msg => {
		process.stdout.write(msg)
	});
});

req.on('error', error => { console.log(error); })
req.end()