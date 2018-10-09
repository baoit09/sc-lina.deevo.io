var request = require('request');

module.exports.product_api002 = function(req, res) {
	
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
};

/* ///////////////////////// */

module.exports.product_api004 = function(req, res) {
	
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
};

/* ///////////////////////// */


module.exports.product_api001 = function(req, res) {
	
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
		
};

/* ///////////////////////// */

module.exports.product_api003 = function(req, res) {
	
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

		
};

