var request = require('request');
var fs = require('fs');

module.exports.org_api003 = function(req, res) {
	
	var orgid=req.param('orgid_key');
	var options = {
  		url: 'http://18.136.205.13:3000/api/v1/orgs/'+ orgid,
  		method: 'GET',
	};

	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			var data=[JSON.parse(body)];
			res.render('template/api/organization',{data:data,message:"",status:0});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/organization',{data:'',message:"Không tìm thấy yêu cầu !!!",status:2});
		}else{
			res.render('template/api/organization',{data:'',message:error,status:2});
		}
     });
};

/* ///////////////////////// */

module.exports.org_api002 = function(req,res) {
	
		var name=req.body.name_item;
		var objectType=req.body.type_item;
		var parent=req.body.parent_item;
		var orgid=req.body.id_item;
		var general_key=req.body.general_key;
		var general_val=req.body.general_val;
		var contact_key=req.body.contact_key;
		var contact_val=req.body.contact_val;
		var address_key=req.body.address_key;
		var address_val=req.body.address_val;
		var location_key=req.body.location_key;
		var location_val=req.body.location_val;

		var general = {};
		var address= {};
		var contact= {};
		var loaction= {};

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

		general["Contact"]=contact;
		general["Address"]=address;
		general["Location"]=location;

		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/orgs',
  			method: 'POST',
			json: {
    				content: JSON.stringify(general),
    				id: orgid,
    				name: name,
    				objectType: objectType,
    				parent: parent
			}
		};
		

	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			res.render('template/api/organization',{data:'',message:"Thực hiện thành công !!!",status:1});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/organization',{data:'',message: JSON.stringify(response),status:2});
		}else{
			res.render('template/api/organization',{data:'',message:error,status:2});
		}
     });
		
};


module.exports.org_api004 = function(req, res) {
		
		var name=req.body.name_item;
		var objectType=req.body.type_item;
		var parent=req.body.parent_item;
		var orgid=req.body.id_item;
		var general_key=req.body.general_key;
		var general_val=req.body.general_val;
		var contact_key=req.body.contact_key;
		var contact_val=req.body.contact_val;
		var address_key=req.body.address_key;
		var address_val=req.body.address_val;
		var location_key=req.body.location_key;
		var location_val=req.body.location_val;

		var general = {};
		var address= {};
		var contact= {};
		var loaction= {};

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

		general["Contact"]=contact;
		general["Address"]=address;
		general["Location"]=location;

		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/orgs/'+ orgid,
  			method: 'PUT',
			json: {
    				content: JSON.stringify(general),
    				name: name,
        			parent: parent
			}
		};

	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			res.render('template/api/organization',{data:'',message:"Thực hiện thành công !!!",status:1});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/organization',{data:'',message:JSON.stringify(response),status:2});
		}else{
			res.render('template/api/organization',{data:'',message:error,status:2});
		}
     });
		
};




/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

module.exports.org_api001_a = function(req, res) {
	
	var data =  JSON.parse(fs.readFileSync('./routes' +'/json.txt'));
	res.render('template/api/organization',{data:data,message:'',status:0});
		
};

/* ///////////////////////// */

module.exports.org_api001_b = function(req, res) {
			
		var data = JSON.parse(fs.readFileSync('./routes' +'/json.txt'));
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/orgs',
  			method: 'POST',
			json: data
		};
		
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			res.render('template/api/organization',{data:'',message:"Thực hiện thành công !!!",status:0});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/organization',{data:'',message:"Không tìm thấy yêu cầu !!!",status:2});
		}else{
			res.render('template/api/organization',{data:'',message:error,status:2});
		}
     });
		
		
};

/* ///////////////////////// */
