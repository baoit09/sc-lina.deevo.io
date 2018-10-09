var request = require('request');

module.exports.action_api002 = function(req, res) {
	
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
};


/* ///////////////////////// */


module.exports.action_api001 = function(req, res) {
	
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
		
};

/* ///////////////////////// */

module.exports.action_api003 = function(req, res) {
	
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
		
};

