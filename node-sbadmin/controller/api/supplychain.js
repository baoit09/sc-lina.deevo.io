var request = require('request');

let baseURL = 'http://18.136.205.13:3000/api/v1';

module.exports.schain_api001 = function(req, res) {
	var user=req.user.username;
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
			res.render('template/api/supplychain', { scms:noneDeletedSCMS,user:user, message:"", status:0});
		} else if(!error && response.statusCode != 200){

			res.render('template/api/supplychain',{ scms:'',user:user, message: "No data found", status:2});

		}else {

			res.render('template/api/supplychain',{ scms:'',user:user,message:error,status:2} );
		}
	});
};

module.exports.schain_api002 = function(req, res) {
	var user=req.user.username;	
	var scm = {		
		id: req.body.id_item || req.body.id_to_delete,
		name: req.body.name_item || req.body.name_to_delete,		
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
	if(req.body.select_product)
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
	else if(mode === "delete")
	{
		scm.content = {
			_status: "Deleted"			
		}
		
		var options = {
			url: baseURL + '/supply-chains/' + scm.id,
			method: 'PUT',
		  json: {				
				content: JSON.stringify(scm.content),
		  }
	  };
	}
	else // mode = ["add", "duplicate"]	
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
					  
				  var action = "";
				  switch(mode) {
					case "add":
						action = "added";
					break;
					case "edit":
						action = "updated";
						break;
					case "duplicate":
						action = "duplicated";
						break;					
					case "delete":
						action = "deleted";
						break;					
					default:
						action = "unknown";
				}

				  var message = "Successfully " + action + " a Supply Chain Model [" + (scm.name ? scm.name : "") + " (#" + (scm.id ? scm.id: "")  + ")]";
				  res.render('template/api/supplychain', { scms:noneDeletedSCMS,user:user, message:message, status:1});
			  } 
		  });			

		} else if(!error && response.statusCode != 200){

			res.render('template/api/supplychain',{ scms:'',user:user, message: "Failed to add or update Supply chain model", status:2});

		}else {
			res.render('template/api/supplychain',{ scms:'',user:user,message:error,status:2} );
		}
	});
};

module.exports.schain_api010 = function(req, res) {
	var user=req.user.username;
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
	var user=req.user.username;
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
	var user=req.user.username;
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
	var user=req.user.username;
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
	var user=req.user.username;
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
	var user=req.user.username;
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
	var user=req.user.username;
	scmID = req.query.scmID;
	var options = {
		  url: baseURL + '/supply-chains/' + (scmID === undefined ? '' : scmID ),
		  method: 'GET',
	};
	
	var items = [];
	request(options, function (error, response, body) {
		if(!error && response.statusCode == 200)
		{
			var data = JSON.parse(body);			
			if (!(data instanceof Array))
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

module.exports.schain_api016 = function(req, res) {

	var role = req.query.role;	
	var eventName = req.query.eventName;

	// Farm & Orchard	
	if (role == "Farm and Orchard" && eventName == "Plant (tree)")
	{
		res.json(["Tree Name", "Quantities"]);
	}
	else if (role == "Farm & Orchard" && eventName == "Take Care (of tree): Water")
	{
		res.json(["Total hours", "Quantities"]);
	}
	else if (role == "Farm & Orchard" && eventName == "Take Care (of tree): Fertilize")
	{
		res.json(["Fertilizer Name", "Quantities"]);
	}
	else if (role == "Farm & Orchard" && eventName == "Harvest")
	{
		res.json(["Tree Name", "Quantities"]);
	}
	else if (role == "Farm & Orchard" && eventName == "Receive")
	{
		res.json([ "From Company Name", "Product Name", "Quantity" ]);
	}
	else if (role == "Farm & Orchard" && eventName == "Store")
	{
		res.json([ "Stored Location Name", "Product Name", "Quantity" ]);
	}
	else if (role == "Farm & Orchard" && eventName == "Deliver")
	{
		res.json([ "To Company Name", "Quantity" ]);
	}
	//Supplier	
	else if(role === "Supplier" && eventName == "Receive")
	{
		res.json([ "From Company Name", "Product Name", "Quantity" ]);	
	}
	else if(role === "Supplier" && eventName === "Store")
	{
		res.json([ "Stored Location Name", "Product Name", "Quantity" ]);	
	}
	else if(role === "Supplier" && eventName  == "Deliver")
	{
		res.json([ "To Company Name", "Quantity" ]);	
	}
	else if(role === "Supplier" && eventName  == "Purchase")
	{
		res.json([ "To Company Name", "Product Name", "Quantity" ]);	
	}
	else if(role === "Supplier" && eventName  == "Transport")
	{
		res.json([ "To Company Name", "Product Name", "Quantity" ]);	
	}
	//Manufacturer
	else if(role === "Manufacturer" && eventName === "Store")
	{
		res.json([ "Stored Location Name", "Product Name", "Quantity" ]);	
	}
	else if(role === "Manufacturer" && eventName  == "Receive")
	{
		res.json([ "From Company Name", "Product Name", "Quantity" ]);	
	}
	else if(role === "Manufacturer" && eventName  == "Deliver")
	{
		res.json([ "To Company Name", "Quantity" ]);	
	}
	else if(role === "Manufacturer" && eventName  == "Purchase")
	{
		res.json([ "From Company Name", "Product Name", "Quantity" ]);	
	}
		else if(role === "Manufacturer" && eventName === "Packing (sachet)")
		{
			res.json([ "Product Name", "Quantity" ]);	
		}
		else if(role === "Manufacturer" && eventName  == "Packing (die-cut bag)")
		{
			res.json([ "Product Name", "Quantity" ]);	
		}
		else if(role === "Manufacturer" && eventName  == "Packing (dozen bag)")
		{
			res.json([ "Product Name", "Quantity" ]);	
		}
		else if(role === "Manufacturer" && eventName  == "Packing (carton)")
		{
			res.json([ "Product Name", "Quantity" ]);
		}
	//Distributor
	else if(role === "Distributor" && eventName === "Store")
	{
		res.json([ "Stored Location Name", "Product Name", "Quantity" ]);	
	}
	else if(role === "Distributor" && eventName  == "Receive")
	{
		res.json([ "From Company Name", "Product Name", "Quantity" ]);	
	}
	else if(role === "Distributor" && eventName  == "Deliver")
	{
		res.json([ "To Company Name", "Quantity" ]);	
	}
	//Retailer
	else if(role === "Retailer" && eventName === "Store")
	{
		res.json([ "Stored Location Name", "Product Name", "Quantity" ]);	
	}
	else if(role === "Retailer" && eventName  == "Receive")
	{
		res.json([ "From Company Name", "Product Name", "Quantity" ]);	
	}
	else if(role === "Retailer" && eventName  == "Deliver")
	{
		res.json([ "To Company Name", "Quantity" ]);	
	}
	else if(role === "Retailer" && eventName  == "Purchase")
	{
		res.json([ "From Company Name", "Product Name", "Quantity" ]);	
	}
		//Auditor
	else if(role === "Auditor" && eventName === "Inspect")
	{
		res.json([ "Company Name", "Location", "Product Name", "Evidences", "Comment" ]);	
	}
	else if(role === "Auditor" && eventName  == "Approve")
	{
		res.json([ "Company Name", "Location", "Product Name", "Evidences", "Comment" ]);	
	}
	else if(role === "Auditor" && eventName  == "Certify")
	{
		res.json([ "Company Name", "Location", "Product Name", "Evidences", "Comment" ]);	
	}
};

