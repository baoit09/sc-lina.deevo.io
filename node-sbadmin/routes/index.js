var Bbs = require('../persister/bbs');
var request = require('request');
var fs = require('fs');
var url = require('url');
var website = "http://toidicode.com?a=5";
var parse = url.parse(website,true);


module.exports = function(app, passport){



/* START ORGANIZATION API */

	app.get('/org-api002', function(req, res) {
		var content="fsfffsefs";
		var name="fsfsf";
		var objectType="org";
		var parent="111111";
		var orgid="555555";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/orgs',
  			method: 'POST',
			json: {
    				content: content,
    				id: orgid,
    				name: name,
    				objectType: objectType,
    				parent: parent
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/org-api003', function(req, res) {

		var orgid="555555";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/orgs/'+ orgid,
  			method: 'GET',
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/org-api004', function(req, res) {
		var content="AAAA";
		var name="456";
		var parent="123";
		var orgid="555555";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/orgs/'+ orgid,
  			method: 'PUT',
			json: {
    				content: content,
    				name: name,
        			parent: parent
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});


/* END ORGANIZATION API */

/* START PARTY API */

	app.get('/party-api0011', function(req, res) {
		var content="a5709ad3-Company AAAAA";
		var name="Grower AAAAA";
		var partyid="55555";
		var parent="a5709ad3-Company AAAAA";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/parties',
  			method: 'POST',
			json: {
    				parent: parent,
    				id: partyid,
    				name: name,
    				content: content
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/party-api0012', function(req, res) {

		var partyid="3333";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/parties/'+ partyid,
  			method: 'GET',
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/party-api0013', function(req, res) {
		var content="AAAAA";
		var name="bac";
		var parent="a5709ad3-Company AAAAA";
		var partyid="2222";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/parties/'+partyid,
  			method: 'PUT',
			json: {
    				parent: parent,
    				name: name,
        			content: content
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});


/* END PARTY API */

/* START LOCATION API */

	app.get('/location-api001', function(req, res) {
		var parent="a5709ad3-Company AAAAA";
		var locationid="66666";
		var name="Grower AAAAA";
		var content="a5709ad3-Company AAAAA";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/locations',
  			method: 'POST',
			json: {
    				parent: parent,
    				id: locationid,
    				name: name,
    				content: content
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/location-api002', function(req, res) {

		var locationid="66666";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/locations/'+ locationid,
  			method: 'GET',
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/location-api003', function(req, res) {
		var content="AAAAA";
		var name="bac";
		var parent="a5709ad3-Company AAAAA";
		var locationid="66666";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/locations/'+ locationid,
  			method: 'PUT',
			json: {
    				parent: parent,
    				name: name,
        			content: content
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});


/* END LOCATION API */

/* START PRODUCT API */

	app.get('/product-api001', function(req, res) {
		var parent="0692d81c-Zone AAAAA";
		var productid="77777";
		var name="Grower AAAAA";
		var content="a5709ad3-Company AAAAA";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/products',
  			method: 'POST',
			json: {
    				parent: parent,
    				id: productid,
    				name: name,
    				content: content
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/product-api002', function(req, res) {

		var productid="77777";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/products/'+ productid,
  			method: 'GET',
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/product-api003', function(req, res) {
		var content="AAAAA";
		var name="bac";
		var parent="0692d81c-Zone AAAAA";
		var productid="77777";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/products/'+ productid,
  			method: 'PUT',
			json: {
    				parent: parent,
    				name: name,
        			content: content
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});


	app.get('/product-api004', function(req, res) {

		var productid="77777";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/products/'+ productid +'/logs',
  			method: 'GET',
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});


/* END PRODUCT API */

/* START ASSET API */

	app.get('/asset-api001', function(req, res) {
		var parent="0692d81c-Zone AAAAA";
		var assetid="88888";
		var name="Grower AAAAA";
		var content="a5709ad3-Company AAAAA";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/assets',
  			method: 'POST',
			json: {
    				parent: parent,
    				id: assetid,
    				name: name,
    				content: content
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/asset-api002', function(req, res) {

		var assetid="88888";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/assets/'+ assetid,
  			method: 'GET',
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/asset-api003', function(req, res) {
		var content="AAAAA";
		var name="bac";
		var parent="0692d81c-Zone AAAAA";
		var assetid="88888";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/assets/'+ assetid,
  			method: 'PUT',
			json: {
    				parent: parent,
    				name: name,
        			content: content
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});


/* END ASSET API */

/* START SUPPLYCHAIN API */

	app.get('/schain-api001', function(req, res) {
		var parent="0692d81c-Zone AAAAA";
		var schainid="88888";
		var name="Grower AAAAA";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/supply-chains',
  			method: 'POST',
			json: {
    				parent: parent,
    				id: schainid,
    				name: name,
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/schain-api002', function(req, res) {

		var schainid="88888";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/supply-chains/'+ schainid,
  			method: 'GET',
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/schain-api003', function(req, res) {
		var name="bac";
		var parent="0692d81c-Zone AAAAA";
		var schainid="88888";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/supply-chains/'+ schainid,
  			method: 'PUT',
			json: {
    				parent: parent,
    				name: name,
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/schain-api004', function(req, res) {

		var schainid="88888";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/supply-chains/'+ schainid +'/logs',
  			method: 'GET',
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});


/* END SUPPLYCHAIN API */

/* START LOG API */

	app.get('/log-api001', function(req, res) {
		var objecttype= "log";
		var logid= "ccaaf20a-Plant-Tree AAAAA1";
  		var time= 1538223545;
  		var ref= [];
		var cte= "Plant";
		var asset= "32c87f9d-Device AAAAA";
  		var supplychain_id= "c7701362-Supply Chain FOOD BBBBB";
  		var location= "0692d81c-Zone AAAAA";
		var product= "94ccaa26-Tree AAAAA";
  		var content= "AAAAAAAAAAAAA";

		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/logs',
  			method: 'POST',
			json: {
				objectType: objecttype,
				id: logid,
				time: time,
				ref: ref,
				cte: cte,
				asset: asset,
				supplychain_id: supplychain_id,
				location: location,
				product: product,
				content: content
				}
		};

			request(options, function (error, response, body) {
				if(!error){
					res.send(body)
				}
     		});
		
	});

	app.get('/log-api002', function(req, res) {

		var logid="ccaaf20a-Plant-Tree AAAAA1";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/logs/'+ logid,
  			method: 'GET',
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/log-api003', function(req, res) {
		var logid= "ccaaf20a-Plant-Tree AAAAA1";
  		var time= 1538223545;
  		var ref= [];
		var cte= "Plant";
		var asset= "32c87f9d-Device AAAAA";
  		var supplychain_id= "c7701362-Supply Chain FOOD BBBBB";
  		var location= "0692d81c-Zone AAAAA";
		var product= "94ccaa26-Tree AAAAA";
  		var content= "bbbbbbbbbb";

		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/logs/' + logid,
  			method: 'PUT',
			json: {
				time: time,
				ref: ref,
				cte: cte,
				asset: asset,
				supplychain_id: supplychain_id,
				location: location,
				product: product,
				content: content
				}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

/* END LOG API */

/* START AUDITOR API */

	app.get('/auditor-api001', function(req, res) {
		var auditorid="9999999";
		var name="Auditor KKKKK";
		var content="Auditor KKKKK's content";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/auditors',
  			method: 'POST',
			json: {
    				id: auditorid,
    				name: name,
    				content: content,
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/auditor-api002', function(req, res) {

		var auditorid="9999999";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/auditors/'+ auditorid,
  			method: 'GET',
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/auditor-api003', function(req, res) {
		var name="bac";
		var content="0692d81c-Zone AAAAA";
		var auditorid="9999999";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/auditors/'+ auditorid,
  			method: 'PUT',
			json: {
    				name: name,
				content: content
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});


/* END AUDITOR API */

/* START AUDIT-ACTION API */

	app.get('/auditaction-api001', function(req, res) {
		var auditorid="9999999";
		var time=1538223545;
		var ref=[];
		var cte="check-plant";
		var asset="70ae0559-Trusted IoT Device BBBBB";
		var objectId="48310142-Fresh Fruit BBBBB";
		var content="Check plant";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/auditors/' + auditorid + '/audit-actions',
  			method: 'POST',
			json: {
    				time: time,
    				ref: ref,
    				cte: cte,
				asset: asset,
				objectId: objectId,
				content: content
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/auditaction-api002', function(req, res) {

		var auditorid="9999999";
		var actionid="61011b10-c888-11e8-b18d-2b334b2a0b06";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/auditors/'  +auditorid + '/audit-actions/' + actionid,
  			method: 'GET',
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});

	app.get('/auditaction-api003', function(req, res) {
		var auditorid="9999999";
		var actionid="61011b10-c888-11e8-b18d-2b334b2a0b06";
		var time=1538223545;
		var ref=[];
		var cte="check-plant";
		var asset="70ae0559-Trusted IoT Device BBBBB";
		var product="48310142-Fresh Fruit BBBBB";
		var content="aaaaaaaa";
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/auditors/' + auditorid + '/audit-actions/' + actionid,
  			method: 'PUT',
			json: {
    				time: time,
    				ref: ref,
    				cte: cte,
				asset: asset,
				product: product,
				content: content
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.send(body)
			}
     		});
		
	});


/* END AUDIT-ACTION API */

	app.get('/mytable', function(req, res) {
	   res.render('template/api/mytable', {});
	});


	app.get('/audit-actionapi', function(req, res) {
		res.render('template/audit-actionapi');
	});


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

	app.post("/a3",function(req, res){
		if(req.param('id')){
		res.send(req.param('id'));}
	});

	app.get("/a3",function(req, res){{
		res.render('abc',{data: req.param('id')})};
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


	app.get('/api001', function(req, res) {
		var data = JSON.parse(fs.readFileSync(__dirname +'/json.txt'));
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/orgs',
  			method: 'POST',
			json: data
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.redirect('/traceables')
			}
     		});
		
	});


	app.get('/traceables', function(req, res) {
		var fs = require('fs');
		var data = JSON.parse(fs.readFileSync(__dirname +'/json.txt'));
		res.render('template/traceables',{data:data});
	});

	app.post('/postone', function (req, res, next) {
		var objecttype= req.param('objecttype');
		var id= req.param('id');
  		var time= req.param('time');
  		var ref= req.param('ref');
		var cte= req.param('cte');
		var asset= req.param('asset');
  		var supplychain_id= req.param('supplychain_id');
  		var locationt= req.param('location');
		var product= req.param('product');
  		var content= req.param('content');



		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/logs',
  			method: 'POST',
			json: {
				objectType: objecttype,
				id: id,
				time: time,
				ref: [],
				cte: cte,
				asset: asset,
				supplychain_id: supplychain_id,
				locationt: locationt,
				product: product,
				content: content
				}
		};

			request(options, function (error, response, body) {
				if(!error){
					res.redirect('/postone')
				}
     		});

	});


	app.get('/postone', function(req, res) {
		res.render('template/postone',{});
	});


	app.get('/getone', function(req, res) {

		if(req.param('id')){
			var options = {
  				url: 'http://18.136.205.13:3000/api/v1/supply-chains/'+req.param('id')+'/logs',
  				method: 'GET',
			};

			request(options, function (error, response, body) {
				if(!error){
					var data=JSON.parse(body);
					res.render('template/getone',{data:data});
				}else{
					res.send("Kh�ng t�m thay theo y�u c?u!")
				}
				
	     		});
		}else{
			res.render('template/getone',{data:''});
		}
	});


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



