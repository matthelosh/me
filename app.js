var express = require('express'),
	app = express(),
	mongoose = require('mongoose'),
	db = require('./models/db'),
	home = require('./routes/index'),
	// blog = require('./routes/blog'),
	user = require('./models/user'),
	bodyParser = require('body-parser');
	//methodOverride = require('method-override');

	app.set('views', __dirname + '/view');
	app.set('view engine', 'pug');


	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	//app.use(methodOverride('_method'));
	app.use('/static', express.static(__dirname+ '/assets'));
	// app.use('/', mainRoute);

	// app.use('/blog', blog);
	app.use('/', home);
	// app.get('/blog/:id', function(req, res, next){
	// 	res.send('Artikel dengan nomor '+ req.params.id);
	// });

	

	app.listen(1984, function(){
		console.log("Tak tunggoki nok portal 1984");
	});