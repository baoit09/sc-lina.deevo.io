var request = require('request');

let baseURL = 'http://18.136.205.13:3000/api/v1';

module.exports.schain_api001 = function(req, res) {

	var id = req.param('id');

	var options = {
		  url: baseURL + '/supply-chains/' + (id === undefined ? '' : id ),
		  method: 'GET',
	};
	
	request(options, function (error, response, body) 
	{
		var scms = [];
		var noneDeletedSCMS = [];

		if(!error && response.statusCode == 200){
			var data = JSON.parse(body);			
			if ( !(data instanceof Array)  )			{
				scms.push(data);
			}
			else
			{
				scms = data;	
			}			
			scms.forEach(function(item){
				if(item.content)
				{
					try {
						item.content = JSON.parse(item.content);
						if(item.content._status != "Deleted")
						{
							noneDeletedSCMS.push(item)
						}
					} catch(e) {}					
				}
				else
				{
					noneDeletedSCMS.push(item)
				}
		  	})
			res.render('template/supplychain', { scms:noneDeletedSCMS, message:"", status:0});
		} else if(!error && response.statusCode != 200){

			res.render('template/supplychain',{ scms:'', message: "No data found", status:2});

		}else {

			res.render('template/supplychain',{ scms:'',message:error,status:2} );
		}
	});
};

module.exports.schain_api002 = function(req, res) {
	
	var scm = {		
		id: req.body.id_item,
		name: req.body.name_item,		
		objectType: "supplychain",
		content : {
			parent : req.body.organization_item,
			version: req.body.version_item,
			status: req.body.status_item,
			products: [],
			scstructure: []
		}
	}

	// set products list
	if(req.body.select_product )
	{
		if(req.body.select_product instanceof Array)
		{
			req.body.select_product.forEach(function(item){
				scm.content.products.push(item);
			})			
		}
		else
		{
			scm.content.products.push(req.body.select_product);
		}
	}

	// set participants list
	if(req.body.select_participants)
	{
		if(req.body.select_participants instanceof Array)
		{
			req.body.select_participants.forEach(function(item){
				scm.content.scstructure.push(item);
			})			
		}
		else
		{
			scm.content.scstructure.push(req.body.select_participants)
		}
	}			

	let mode = req.body.mode;

	var options = {};
	if(mode === "edit")
	{
		options = {
			url: baseURL + '/supply-chains/' + scm.id,
			method: 'PUT',
		  	json: {	
				  name: scm.name,
				  content: JSON.stringify(scm.content),
			}
		};
	}
	else // mode = ["new", "duplicate"]	
	{
		options = {
			url: baseURL + '/supply-chains/',
			method: 'POST',
			json: {				
					id: scm.id,
					name: scm.name,
					objectType: scm.objectType,				
					content: JSON.stringify(scm.content),
			}
		};	
	}
	

	request(options, function (error, response, body) 
	{
		if(!error && response.statusCode == 200){
			
		  var options = {
				url: baseURL + '/supply-chains/',
				method: 'GET',
		  };		  
		  request(options, function (error, response, body) 
		  {
			  var scms = [];
			  var noneDeletedSCMS = [];
			  
			  if(!error && response.statusCode == 200){
				  var data = JSON.parse(body);			
				  if ( !(data instanceof Array)  )			{
					  scms.push(data);
				  }
				  else
				  {
					  scms = data;	
				  }
				  scms.forEach(function(item){
					if(item.content)
					{
						try {
							item.content = JSON.parse(item.content);
							if(item.content._status != "Deleted")
							{
								noneDeletedSCMS.push(item)
							}
						} catch(e) {}					
					}
					else
					{
						noneDeletedSCMS.push(item)
					}
				  })

				  var message = "Successfuly" + (mode === "edit"? " updated " : (mode === "duplicate" ? " duplicated " : " added ") ) 
				  				+ "a Supply chain model [ " + scm.name + " ]";
				  res.render('template/supplychain', { scms:noneDeletedSCMS, message:message, status:1});
			  } 
		  });			

		} else if(!error && response.statusCode != 200){

			res.render('template/supplychain',{ scms:'', message: "Failed to add or update Supply chain model", status:2});

		}else {
			res.render('template/supplychain',{ scms:'',message:error,status:2} );
		}
	});
};


/* ///////////////////////// */

module.exports.schain_api003 = function(req, res) {
	
	var scm = {
		id: req.body.id,		
		content : {
			_status: req.body._status			
		}
	}

	var options = {
		  url: baseURL + '/supply-chains/' + scm.id,
		  method: 'PUT',
		json: {				
				content: JSON.stringify(scm.content),
		}
	};

	request(options, function (error, response, body) 
	{
		if(!error && response.statusCode === 200){				  
			res.json(response.statusCode)
		} else if(!error && response.statusCode != 200){
			res.json()
		}else {
			res.json()
		}
	});
};

module.exports.schain_api010 = function(req, res) {

	var options = {
		  url: baseURL + '/orgs',
		  method: 'GET',
	};
	
	var orgs = [];

	request(options, function (error, response, body) {

		if(!error && response.statusCode == 200){

			var objects = [];

			var data = JSON.parse(body);
			
			if ( !(data instanceof Array)  )
			{
				orgs.push(data);
			}
			else
			{
				orgs = data;	
			}

			res.json(orgs);

		} else if(!error && response.statusCode != 200){

			res.json(orgs);

		}else {

			res.json(orgs);
		}
     });
};

module.exports.schain_api010 = function(req, res) {

	var options = {
		  url: baseURL + '/orgs',
		  method: 'GET',
	};
	
	var items = [];

	request(options, function (error, response, body) {
		if(!error && response.statusCode == 200){
			var data = JSON.parse(body);			
			if ( !(data instanceof Array)  )
			{
				items.push(data);
			}
			else
			{
				items = data;	
			}
			res.json(items);
		}else {

			res.json(orgs);
		}
     });
};


module.exports.schain_api011 = function(req, res) {

	var options = {
		  url: baseURL + '/parties',
		  method: 'GET',
	};
	
	var items = [];

	request(options, function (error, response, body) {
		if(!error && response.statusCode == 200)
		{
			var data = JSON.parse(body);			
			if ( !(data instanceof Array)  )
			{
				items.push(data);
			}
			else
			{
				items = data;	
			}
			res.json(items);		
		}
		else
		{
			res.json(items);		
		}
     });
};

module.exports.schain_api012 = function(req, res) {

	var options = {
		  url: baseURL + '/locations',
		  method: 'GET',
	};
	
	var items = [];

	request(options, function (error, response, body) {
		if(!error && response.statusCode == 200)
		{
			var data = JSON.parse(body);			
			if ( !(data instanceof Array)  )
			{
				items.push(data);
			}
			else
			{
				items = data;	
			}
			res.json(items);		
		}
		else
		{
			res.json(items);		
		}
     });
};

module.exports.schain_api013 = function(req, res) {

	var options = {
		  url: baseURL + '/assets',
		  method: 'GET',
	};
	
	var items = [];

	request(options, function (error, response, body) {
		if(!error && response.statusCode == 200)
		{
			var data = JSON.parse(body);			
			if ( !(data instanceof Array)  )
			{
				items.push(data);
			}
			else
			{
				items = data;	
			}
			res.json(items);		
		}
		else
		{
			res.json(items);		
		}
     });
};

module.exports.schain_api014 = function(req, res) {

	var options = {
		  url: baseURL + '/products',
		  method: 'GET',
	};
	
	var items = [];
	request(options, function (error, response, body) {
		if(!error && response.statusCode == 200)
		{
			var data = JSON.parse(body);			
			if ( !(data instanceof Array)  )
			{
				items.push(data);
			}
			else
			{
				items = data;	
			}
			res.json(items);		
		}
		else
		{
			res.json(items);		
		}
     });
};

module.exports.schain_api015 = function(req, res) {

	scmID = req.query.scmID;
	var options = {
		  url: baseURL + '/supply-chains/' + scmID,
		  method: 'GET',
	};
	
	var items = [];
	request(options, function (error, response, body) {
		if(!error && response.statusCode == 200)
		{
			var data = JSON.parse(body);			
			if ( !(data instanceof Array)  )
			{
				items.push(data);
			}
			else
			{
				items = data;	
			}
			res.json(items);		
		}
		else
		{
			res.json(items);		
		}
     });
};