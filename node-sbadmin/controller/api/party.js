var request = require('request');

module.exports.party_api0012 = function(req, res) {
	
		var partyid=req.param('orgid_key');
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/parties/'+ partyid,
  			method: 'GET',
		};
		
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			var data=[JSON.parse(body)];
			res.render('template/api/party',{data:data,message:"",status:0});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/party',{data:'',message:'Không tìm thấy yêu cầu !!!',status:2});
		}else{
			res.render('template/api/party',{data:'',message:error,status:2});
		}
     });
};

/* ///////////////////////// */

module.exports.party_api0014 = function(req, res) {
	
	var partyid=req.param('orgid_key');
	var options = {
		  url: 'http://18.136.205.13:3000/api/v1/parties/',
		  method: 'GET',
	};
	
request(options, function (error, response, body) {
	if(!error && response.statusCode==200){
		var data=JSON.parse(body);
		res.render('template/api/party',{data:data,message:"",status:0});
	}else if(!error && response.statusCode!=200){
		res.render('template/api/party',{data:'',message:'Không tìm thấy yêu cầu !!!',status:2});
	}else{
		res.render('template/api/party',{data:'',message:error,status:2});
	}
 });
};

/* ///////////////////////// */


module.exports.party_api0011 = function(req, res) {
	
	
		var name=req.body.name_item;
		var parent=req.body.parent_item;
		var partyid=req.body.id_item;
		var general_key=req.body.general_key;
		var general_val=req.body.general_val;
		var contact_key=req.body.contact_key;
		var contact_val=req.body.contact_val;
		var address_key=req.body.address_key;
		var address_val=req.body.address_val;
		var location_key=req.body.location_key;
		var location_val=req.body.location_val;
		var sns_key=req.body.sns_key;
		var sns_val=req.body.sns_val;

		var general = {};
		var address= {};
		var contact= {};
		var location= {};
		var sns= {};
		
		for (var i = 0; i <= general_key.length; i++) {
			general[general_key[i]] = general_val[i];
		};

		for (var i = 0; i <= contact_key.length; i++) {
			contact[contact_key[i]] = contact_val[i];
		};

		for (var i = 0; i <= location_key.length; i++) {
			location[location_key[i]] = location_val[i];
		};


		for (var i = 0; i <= address_key.length; i++) {
			address[address_key[i]] = address_val[i];
		};
		
		for (var i = 0; i <= sns_key.length; i++) {
			sns[sns_key[i]] = sns_val[i];
		};

		general["Contact"]=contact;
		general["Address"]=address;
		general["Location"]=location;
		general["SNS"]=sns;


		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/parties',
  			method: 'POST',
			json: {
    				parent: parent,
    				id: partyid,
    				name: name,
    				content: JSON.stringify(general)
			}
		};
		
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			var options = {
				url: 'http://18.136.205.13:3000/api/v1/parties/',
				method: 'GET',
		  	};
		  
			request(options, function (error, response, body) {
				if(!error && response.statusCode==200){
					var data=JSON.parse(body);
					res.render('template/api/party',{data:data,message:"Thực hiện thành công !!!",status:1});
				}else if(!error && response.statusCode!=200){
					res.render('template/api/party',{data:'',message:'Không tìm thấy yêu cầu !!!',status:2});
				}else{
					res.render('template/api/party',{data:'',message:error,status:2});
				}
			});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/party',{data:'',message: JSON.stringify(response),status:2});
		}else{
			res.render('template/api/party',{data:'',message:error,status:2});
		}
     });

};
/* ///////////////////////// */

module.exports.party_api0013 = function(req, res) {
	
		var name=req.body.name_item;
		var parent=req.body.parent_item;
		var partyid=req.body.id_item;
		var general_key=req.body.general_key;
		var general_val=req.body.general_val;
		var contact_key=req.body.contact_key;
		var contact_val=req.body.contact_val;
		var address_key=req.body.address_key;
		var address_val=req.body.address_val;
		var location_key=req.body.location_key;
		var location_val=req.body.location_val;
		var sns_key=req.body.sns_key;
		var sns_val=req.body.sns_val;

		var general = {};
		var address= {};
		var contact= {};
		var location= {};
		var sns= {};
		
		for (var i = 0; i <= general_key.length; i++) {
			general[general_key[i]] = general_val[i];
		};

		for (var i = 0; i <= contact_key.length; i++) {
			contact[contact_key[i]] = contact_val[i];
		};

		for (var i = 0; i <= location_key.length; i++) {
			location[location_key[i]] = location_val[i];
		};


		for (var i = 0; i <= address_key.length; i++) {
			address[address_key[i]] = address_val[i];
		};
		
		for (var i = 0; i <= sns_key.length; i++) {
			sns[sns_key[i]] = sns_val[i];
		};

		general["Contact"]=contact;
		general["Address"]=address;
		general["Location"]=location;
		general["SNS"]=sns;
		
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/parties/'+partyid,
  			method: 'PUT',
			json: {
    				parent: parent,
    				name: name,
        			content: JSON.stringify(general)
			}
		};
		
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			var options = {
				url: 'http://18.136.205.13:3000/api/v1/parties/',
				method: 'GET',
		  	};
		  
			request(options, function (error, response, body) {
				if(!error && response.statusCode==200){
					var data=JSON.parse(body);
					res.render('template/api/party',{data:data,message:"Thực hiện thành công !!!",status:1});
				}else if(!error && response.statusCode!=200){
					res.render('template/api/party',{data:'',message:'Không tìm thấy yêu cầu !!!',status:2});
				}else{
					res.render('template/api/party',{data:'',message:error,status:2});
				}
			});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/party',{data:'',message: JSON.stringify(response),status:2});
		}else{
			res.render('template/api/party',{data:'',message:error,status:2});
		}
     });
		
};

