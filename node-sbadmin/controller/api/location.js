var request = require('request');

module.exports.location_api002 = function(req, res) {
		var user=req.user.username;
		var locationid=req.param('orgid_key');
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/locations/'+ locationid,
  			method: 'GET',
		};
		
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			var data=[JSON.parse(body)];
			res.render('template/api/location',{data:data,user:user,message:'',status:0});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/location',{data:'',user:user,message:'No data found!',status:2});
		}else{
			res.render('template/api/location',{data:'',user:user,message:error,status:2});
		}
     });

};

/* ///////////////////////// */

module.exports.location_api004 = function(req, res) {
		var user=req.user.username;
		var locationid=req.param('orgid_key');
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/locations/',
  			method: 'GET',
		};
		
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			var data=JSON.parse(body);
			res.render('template/api/location',{data:data,user:user,message:'',status:0});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/location',{data:'',user:user,message:'No data found!',status:2});
		}else{
			res.render('template/api/location',{data:'',user:user,message:error,status:2});
		}
     });

};

/* ///////////////////////// */


module.exports.location_api001 = function(req, res) {
		var user=req.user.username;
		var name=req.body.name_item;
		var parent=req.body.parent_item;
		var locationid=req.body.id_item;
		var general_key=req.body.general_key;
		var general_val=req.body.general_val;
		var contact_key=req.body.contact_key;
		var contact_val=req.body.contact_val;
		var location_key=req.body.location_key;
		var location_val=req.body.location_val;


		var general = {};
		var contact= {};
		var location= {};
		
		for (var i = 0; i <= general_key.length; i++) {
			general[general_key[i]] = general_val[i];
		};

		for (var i = 0; i <= contact_key.length; i++) {
			contact[contact_key[i]] = contact_val[i];
		};

		for (var i = 0; i <= location_key.length; i++) {
			location[location_key[i]] = location_val[i];
		};


		general["Contact"]=contact;
		general["Location"]=location;

		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/locations',
  			method: 'POST',
			json: {
    				parent: parent,
    				id: locationid,
    				name: name,
    				content: JSON.stringify(general)
			}
		};
		
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			var locationid=req.param('orgid_key');
			var options = {
				  url: 'http://18.136.205.13:3000/api/v1/locations/',
				  method: 'GET',
			};
			
		request(options, function (error, response, body) {
			if(!error && response.statusCode==200){
				var data=JSON.parse(body);
				res.render('template/api/location',{data:data,user:user,message:"Successfully added "+ name +" to system.",status:1});
			}else{
				res.render('template/api/location',{data:'',user:user,message:"Failed to add "+ name + " to system.",status:2});
			}
		 	});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/location',{data:'',user:user,message:"Failed to add "+ name + " to system.",status:2});
		}else{
			res.render('template/api/location',{data:'',user:user,message:error,status:2});
		}
    });
		
};

/* ///////////////////////// */

module.exports.location_api003 = function(req, res) {
		var user=req.user.username;
		var name=req.body.name_item;
		var parent=req.body.parent_item;
		var locationid=req.body.id_item;
		var general_key=req.body.general_key;
		var general_val=req.body.general_val;
		var contact_key=req.body.contact_key;
		var contact_val=req.body.contact_val;
		var location_key=req.body.location_key;
		var location_val=req.body.location_val;


		var general = {};
		var contact= {};
		var location= {};
		
		for (var i = 0; i <= general_key.length; i++) {
			general[general_key[i]] = general_val[i];
		};

		for (var i = 0; i <= contact_key.length; i++) {
			contact[contact_key[i]] = contact_val[i];
		};

		for (var i = 0; i <= location_key.length; i++) {
			location[location_key[i]] = location_val[i];
		};


		general["Contact"]=contact;
		general["Location"]=location;
		
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/locations/'+ locationid,
  			method: 'PUT',
			json: {
    				parent: parent,
    				name: name,
        			content: JSON.stringify(general)
			}
		};
		
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			var locationid=req.param('orgid_key');
			var options = {
				  url: 'http://18.136.205.13:3000/api/v1/locations/',
				  method: 'GET',
			};
			
		request(options, function (error, response, body) {
			if(!error && response.statusCode==200){
				var data=JSON.parse(body);
				res.render('template/api/location',{data:data,user:user,message:"Successfully updated "+ name +" to system.",status:1});
			}else{
				res.render('template/api/location',{data:'',user:user,message:"Failed to add "+ name + " to system.",status:2});
			}
		 });
		}else if(!error && response.statusCode!=200){
			res.render('template/api/location',{data:'',user:user,message:"Failed to add "+ name + " to system.",status:2});
		}else{
			res.render('template/api/location',{data:'',user:user,message:error,status:2});
		}
     });
		
};

