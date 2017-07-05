const Pageres = require('pageres');

const targetUrl = 'www.boehringer-academy.co.uk'

const outputDestination = '/screenshots/'

const pageres = new Pageres({delay: 5})
	// .src('yeoman.io', ['480x320', '1024x768', 'iphone 5s'], {crop: true})
	.src(targetUrl, ['1280x1024', '1920x1080', '480x320',  'iphone 5s', 'iphone 6s'])
	// .src('data:text/html;base64,PGgxPkZPTzwvaDE+', ['1024x768'])
	.dest(__dirname + outputDestination)
	.run()
	.then(() => console.log('done'));
