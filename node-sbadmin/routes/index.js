var Bbs = require('../persister/bbs');
var request = require('request');

module.exports = function(app, passport){
	
	app.get("/api",function(req, res){

		var options = {
			headers: {
					"Accept": "application/json",
					"Content-Type": "application/json"
				},
  			url: 'https://apiv3-test.ghn.vn/api/v1/apiv3/GetHubs',
  			method: 'POST',
			json: {token: "TokenStaging"}
		};
		
		request(options, function (error, response, body) {
			var info=body
        		res.send(info.data[0]);
     		});
	});

	app.get("/post",function(req, res){

		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/orgs',
  			method: 'POST',
			json:{
				content: "\"Content of Company AAAAA\"",
    				id: "a5709ad3-Company AAAAA",
    				name: "Company AAAAA",
    				objectType: "org",
    				parent: "00000000"
			}
		};
		
		request(options, function (error, response, body) {
        		res.send(
				body
				);

     		});
	});


	app.get("/api2",function(req, res){

		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/orgs/a5709ad3-Company AAAAA',
  			method: 'GET',
		};
		
		request(options, function (error, response, body) {
        		res.send(
				body
				);

     		});
	});


	 /* GET home page. */
	app.get('/',isAuthenticated, function(req, res) {
	   res.redirect('/readme');
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
	app.get('/dashboard',isAuthenticated, function(req, res) {
	   res.render('template/index', {});
	});
	app.get('/flot',isAuthenticated, function(req, res) {
	   res.render('template/flot', {});
	});
	app.get('/morris',isAuthenticated, function(req, res) {
	   res.render('template/morris', {});
	});
	app.get('/tables',isAuthenticated, function(req, res) {
	   res.render('template/tables', {});
	});
	app.get('/forms',isAuthenticated, function(req, res) {
	   res.render('template/forms', {});
	});
	app.get('/panelswells',isAuthenticated, function(req, res) {
	   res.render('template/panelswells', {});
	});
	app.get('/buttons',isAuthenticated, function(req, res) {
	   res.render('template/buttons', {});
	});
	app.get('/notifications',isAuthenticated, function(req, res) {
	   res.render('template/notifications', {});
	});
	app.get('/typography',isAuthenticated, function(req, res) {
	   res.render('template/typography', {});
	});
	app.get('/icons',isAuthenticated, function(req, res) {
	   res.render('template/icons', {});
	});
	app.get('/grid',isAuthenticated, function(req, res) {
	   res.render('template/grid', {});
	});
	app.get('/blank',isAuthenticated, function(req, res) {
	   res.render('template/blank', {});
	});
	
  	app.get('/bbs',isAuthenticated, function(req, res) {
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



