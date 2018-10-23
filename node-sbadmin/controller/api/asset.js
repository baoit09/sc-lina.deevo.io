var request = require('request');

module.exports.asset_api002 = function(req, res) {
		var user=req.user.username;
		var assetid=req.param('orgid_key');
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/assets/'+ assetid,
  			method: 'GET',
		};
		
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			var data=[JSON.parse(body)];
			res.render('template/api/asset',{data:data,user:user,message:"",status:0});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/asset',{data:'',user:user,message:'No data found!',status:2});
		}else{
			res.render('template/api/asset',{data:'',user:user,message:error,status:2});
		}
     });

};


/* ///////////////////////// */

module.exports.asset_api004 = function(req, res) {
	var user=req.user.username;
	var assetid=req.param('orgid_key');
	var options = {
		  url: 'http://18.136.205.13:3000/api/v1/assets/',
		  method: 'GET',
	};
	
request(options, function (error, response, body) {
	if(!error && response.statusCode==200){
		var data=JSON.parse(body);
		res.render('template/api/asset',{data:data,user:user,message:"",status:0});
	}else if(!error && response.statusCode!=200){
		res.render('template/api/asset',{data:'',user:user,message:'No data found!',status:2});
	}else{
		res.render('template/api/asset',{data:'',user:user,message:error,status:2});
	}
 });

};


/* ///////////////////////// */


module.exports.asset_api001 = function(req, res) {
		var user=req.user.username;
		var name=req.body.name_item;
		var parent=req.body.parent_item;
		var assetid=req.body.id_item;
		
		var general_key=req.body.general_key;
		var general_val=req.body.general_val;
		
		var general = {};

		for (var i = 0; i <= general_key.length; i++) {
			general[general_key[i]] = general_val[i];
		};

		
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/assets',
  			method: 'POST',
			json: {
    				parent: parent,
    				id: assetid,
    				name: name,
    				content: JSON.stringify(general)
			}
		};
		
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			var options = {
				url: 'http://18.136.205.13:3000/api/v1/assets/',
				method: 'GET',
		  	};
		  
			request(options, function (error, response, body) {
				if(!error && response.statusCode==200){
					var data=JSON.parse(body);
					res.render('template/api/asset',{data:data,user:user,message:"Successfully added "+ name +" to system.",status:1});
				}else{
					res.render('template/api/asset',{data:'',user:user,message:"Failed to add "+ name + " to system.",status:2});
				}
			});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/asset',{data:'',user:user,message: "Failed to add "+ name + " to system.",status:2});
		}else{
			res.render('template/api/asset',{data:'',user:user,message:error,status:2});
		}
     });
		
};

/* ///////////////////////// */

module.exports.asset_api003 = function(req, res) {
		var user=req.user.username;
		var name=req.body.name_item;
		var parent=req.body.parent_item;
		var assetid=req.body.id_item;
		
		var general_key=req.body.general_key;
		var general_val=req.body.general_val;
		
		var general = {};

		for (var i = 0; i <= general_key.length; i++) {
			general[general_key[i]] = general_val[i];
		};

		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/assets/'+ assetid,
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
				url: 'http://18.136.205.13:3000/api/v1/assets/',
				method: 'GET',
		  	};
		  
			request(options, function (error, response, body) {
				if(!error && response.statusCode==200){
					var data=JSON.parse(body);
					res.render('template/api/asset',{data:data,user:user,message:"Successfully updated "+ name +" to system.",status:1});
				}else{
					res.render('template/api/asset',{data:'',user:user,message:"Failed to add "+ name + " to system.",status:2});
				}
			});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/asset',{data:'',user:user,message: "Failed to add "+ name + " to system.",status:2});
		}else{
			res.render('template/api/asset',{data:'',user:user,message:error,status:2});
		}
     });

		
};

