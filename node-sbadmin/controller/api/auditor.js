var request = require('request');

module.exports.auditor_api002 = function(req, res) {
	
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
};


/* ///////////////////////// */


module.exports.auditor_api001 = function(req, res) {
	
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
		
};

/* ///////////////////////// */

module.exports.auditor_api003 = function(req, res) {
	
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
		
};

