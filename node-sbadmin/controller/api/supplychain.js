var request = require('request');

module.exports.schain_api002 = function(req, res) {
	
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

