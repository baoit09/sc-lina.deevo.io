var request = require('request');

module.exports.asset_api002 = function(req, res) {
	
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
};


/* ///////////////////////// */


module.exports.asset_api001 = function(req, res) {
	
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
		
};

/* ///////////////////////// */

module.exports.asset_api003 = function(req, res) {
	
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

		
};

