var request = require('request');

let baseURL = 'http://18.136.205.13:3000/api/v1';

module.exports.schain_api001 = function(req, res) {

	var id = req.param('id');

	var options = {
		  url: baseURL + '/supply-chains/' + (id === undefined ? '' : id ),
		  method: 'GET',
	};
	
	request(options, function (error, response, body) {

		if(!error && response.statusCode == 200){

			var objects = [];

			var data = JSON.parse(body);
			
			if ( !(data instanceof Array)  )
			{
				objects.push(data);
			}
			else
			{
				objects = data;	
			}

			res.render('template/api/supplychain', { data:objects, message:"", status:0});

		} else if(!error && response.statusCode != 200){

			res.render('template/api/supplychain',{ data:'', message: "Không tìm thấy yêu cầu !!!", status:2});

		}else {

			res.render('template/api/supplychain',{ data:'',message:error,status:2} );
		}
     });
};


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

// module.exports.schain_api001 = function(req, res) {
	
// 		var parent="0692d81c-Zone AAAAA";
// 		var schainid="88888";
// 		var name="Grower AAAAA";
// 		var options = {
//   			url: 'http://18.136.205.13:3000/api/v1/supply-chains',
//   			method: 'POST',
// 			json: {
//     				parent: parent,
//     				id: schainid,
//     				name: name,
// 			}
// 		};
		
// 		request(options, function (error, response, body) {
// 			if(!error){
// 				res.send(body)
// 			}
//      		});
		
// };

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

