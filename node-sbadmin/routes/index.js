var Bbs = require('../persister/bbs');
var request = require('request');
var fs = require('fs');
var url = require('url');
var website = "http://toidicode.com?a=5";
var parse = url.parse(website,true);


module.exports = function(app, passport){


	 /* GET home page. */

	app.get('/', function(req, res) {
		res.redirect('/dashboard');
	});

	app.post('/login', passport.authenticate('login', {
		successRedirect: '/dashboard',
		failureRedirect: '/login',
		failureFlash : true 
	}));

	app.get('/login', function(req, res) {
	   res.render('template/login', { message: req.flash('message') });
	});

	app.get('/logout', function(req, res) {
	   req.logout();
  	   res.redirect('/');
	});
	
	
	app.get('/signup', function(req, res){
		res.render('template/signup',{ message: req.flash('message') });
	});

	/* Handle Registration POST */
	app.post('/signup', passport.authenticate('signup', {
		successRedirect: '/login',
		failureRedirect: '/signup',
		failureFlash : true 
	}));

	app.get('/readme',isAuthenticated, function(req, res) {
	   res.render('template/readme', {});
	});

	app.get('/dashboard', function(req, res) {
	   res.render('template/index', {});
	});

	app.get('/flot', function(req, res) {
	   res.render('template/flot', {});
	});

	app.get('/morris', function(req, res) {
	   res.render('template/morris', {});
	});

	app.get('/tables', function(req, res) {
	   res.render('template/tables', {});
	});

	app.get('/forms', function(req, res) {
	   res.render('template/forms', {});
	});

	app.get('/panelswells', function(req, res) {
	   res.render('template/panelswells', {});
	});

	app.get('/buttons', function(req, res) {
	   res.render('template/buttons', {});
	});
	app.get('/notifications', function(req, res) {
	   res.render('template/notifications', {});
	});
	app.get('/typography', function(req, res) {
	   res.render('template/typography', {});
	});
	app.get('/icons', function(req, res) {
	   res.render('template/icons', {});
	});
	app.get('/grid', function(req, res) {
	   res.render('template/grid', {});
	});
	app.get('/blank', function(req, res) {
	   res.render('template/blank', {});
	});
	
  	app.get('/bbs', function(req, res) {
	   res.render('template/bbs', {});
	});
	
	app.get('/bbs/list',isAuthenticated, function(req, res) {
		 Bbs.find({}, 
	      function(err, bbs) {
	        // In case of any error, return using the done method
	        if (err)
	          return done(err);
	        // Username does not exist, log error & redirect back
	        res.send(bbs);
	      }
	    );
	});

	app.post('/bbs/create',isAuthenticated, function(req, res) {
		
		var newBbs = new Bbs();
		// set the user's local credentials
		newBbs.content = req.param('content');
		newBbs.vote = 0;
		newBbs.username = req.user.username;
		
		// save the user
		newBbs.save(function(err) {
			if (err){
			  console.log('Error in Saving bbs: '+err);  
			  res.send({"result":false});
			}
			res.send({"result":true});
		});
	});

	app.post('/bbs/delete',isAuthenticated, function(req, res) {
		// set the user's local credentials
		var id = req.param('id');
		Bbs.findByIdAndRemove(id,function(err){
			if (err){
			  console.log('Error in Saving bbs: '+err);  
			  res.send({"result":false});
			}


			res.send({"result":true});
		})

		
	});
	app.post('/bbs/update',isAuthenticated, function(req, res) {
		// set the user's local credentials
		var id = req.param('id');

		Bbs.findById(id,function(err,bbs){
			if (err){
			  console.log('Error in Saving bbs: '+err);  
			  res.send({"result":false});
			}
			bbs.vote +=1;
			bbs.save(function(){
				res.send({"result":true});	
			})
			
		})
	});
}
	// As with any middleware it is quintessential to call next()
	// if the user is authenticated
	var isAuthenticated = function (req, res, next) {
	  if (req.isAuthenticated())
	    return next();
	  res.redirect('/login');
	}



