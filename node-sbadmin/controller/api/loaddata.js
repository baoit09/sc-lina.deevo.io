var request = require('request');
var fs = require('fs');


module.exports.get_ajax = function(req, res) {

	var str=req.params.action;
    var baseurl;
    
	if(str === 'auditor'){
		baseurl= 'http://18.136.205.13:3000/api/v1/auditors/';
	}else if(str === 'location'){
        baseurl= 'http://18.136.205.13:3000/api/v1/locations/';
    }else if(str === 'organ'){
		baseurl= 'http://18.136.205.13:3000/api/v1/orgs/';
	}else if(str === 'party'){
		baseurl= 'http://18.136.205.13:3000/api/v1/parties/';
	}else if(str === 'asset'){
		baseurl= 'http://18.136.205.13:3000/api/v1/assets/';
	}else if(str === 'supplychain'){
		baseurl= 'http://18.136.205.13:3000/api/v1/supply-chains/';
	}else{
        baseurl= 'http://18.136.205.13:3000/api/v1/products/';
	}
    
    var options = {
        url: baseurl,
        method: 'GET',
    };

	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			  res.send(body);
		}
	 });

};