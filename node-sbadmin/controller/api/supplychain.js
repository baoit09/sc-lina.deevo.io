var request = require('request');

module.exports.schain_api002 = function(req, res) {
	
<<<<<<< HEAD
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
=======
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
		if(req.cvody.select_participants instanceof Array)
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
				  res.render('template/api/supplychain', { scms:noneDeletedSCMS, message:message, status:1});
			  } 
		  });			

		} else if(!error && response.statusCode != 200){

			res.render('template/api/supplychain',{ scms:'', message: "Failed to add or update Supply chain model", status:2});

		}else {
			res.render('template/api/supplychain',{ scms:'',message:error,status:2} );
		}
	});
>>>>>>> 9235a5fc180f20f7aada66af7a50a72db0d9c855
};


/* ///////////////////////// */

module.exports.schain_api004 = function(req, res) {
	
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
};


/* ///////////////////////// */

module.exports.schain_api001 = function(req, res) {
	
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
		
};

/* ///////////////////////// */

module.exports.schain_api003 = function(req, res) {
	
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
		
};

