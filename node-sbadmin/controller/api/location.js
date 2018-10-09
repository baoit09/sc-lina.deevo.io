var request = require('request');

module.exports.location_api002 = function(req, res) {
	
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
};

/* ///////////////////////// */

module.exports.location_api001 = function(req, res) {
	
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
		
};

/* ///////////////////////// */

module.exports.location_api003 = function(req, res) {
	
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
		
};

