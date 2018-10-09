var request = require('request');

module.exports.log_api002 = function(req, res) {
	
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
};


/* ///////////////////////// */


module.exports.log_api001 = function(req, res) {
	
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
		
};

/* ///////////////////////// */

module.exports.log_api003 = function(req, res) {
	
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
		
};

