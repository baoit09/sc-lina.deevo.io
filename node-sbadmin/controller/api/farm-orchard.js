var request = require('request');

module.exports.get_log_farm = function(req, res) {
	
		var logid=req.param('orgid_key');
		var logtype=req.param('type_search');
		var url;

		if(logtype==0){
			url= 'http://18.136.205.13:3000/api/v1/logs/'+ logid;
		}else{
			url= 'http://18.136.205.13:3000/api/v1/logs?product='+logtype;
		}

		var options = {
			url: url,
			method: 'GET',
		};
		
		request(options, function (error, response, body) {
			if(!error && response.statusCode==200){
				if(logtype==0){
					var data=[JSON.parse(body)];
					res.render('template/api/farm-orchard',{data:data,message:'',status:0});
				}else{
					var data=JSON.parse(body);
					if(Object.keys(data).length>0){
						res.render('template/api/farm-orchard',{data:data,message:'',status:0});
					}else{
						res.render('template/api/farm-orchard',{data:data,message:'No data found!',status:2});
					}
				}
				
			}else if(!error && response.statusCode!=200){
				res.render('template/api/farm-orchard',{data:'',message:'No data found!',status:2});
			}else{
				res.render('template/api/farm-orchard',{data:'',message:error,status:2});
			}
		 });
	
};


/* ///////////////////////// */

module.exports.getall_log_farm = function(req, res,view) {
	
	var logid=req.param('orgid_key');
	var options = {
		  url: 'http://18.136.205.13:3000/api/v1/logs/',
		  method: 'GET',
	};
	
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			var data=JSON.parse(body);
			res.render('template/api/'+view,{data:data,message:'',status:0});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/'+view,{data:'',message:'No data found!',status:2});
		}else{
			res.render('template/api/'+view,{data:'',message:error,status:2});
		}
	 });

};


/* ///////////////////////// */


module.exports.log_api001 = function(req, res) {
	
		var objectType= req.body.objectType_item;
		var logid= req.body.id_item;
		var time= req.body.time_item;
		var cte= req.body.cte_item;
		var asset= req.body.asset_item;
		var supplychain_id= req.body.supplychain_item;
		var location= req.body.location_item;
		var product= req.body.product_item;
		var general_key=req.body.general_key;
		var general_val=req.body.general_val;
	
		var general = {};
		
		for (var i = 0; i <= general_key.length; i++) {
			general[general_key[i]] = general_val[i];
		};
		  
		var ref= [];
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/logs',
  			method: 'POST',
			json: {
				objectType: objectType,
				id: logid,
				time: parseInt(time),
				ref: ref,
				cte: cte,
				asset: asset,
				supplychain_id: supplychain_id,
				location: location,
				product: product,
				content: JSON.stringify(general)
				}
		};

		request(options, function (error, response, body) {
			if(!error && response.statusCode==200){
				var options = {
					url: 'http://18.136.205.13:3000/api/v1/logs/',
					method: 'GET',
			  };
			  
			  request(options, function (error, response, body) {
				  if(!error && response.statusCode==200){
					  var data=JSON.parse(body);
					  res.render('template/api/farm-orchard',{data:data,message:"Successfully added "+ logid +" to system.",status:1});
				  }else{
					  res.render('template/api/farm-orchard',{data:'',message:"Failed to add "+ logid + " to system.",status:2});
				  }
			   });
			}else if(!error && response.statusCode!=200){
				res.render('template/api/farm-orchard',{data:'',message:"Failed to add "+ logid + " to system.",status:2});
			}else{
				res.render('template/api/farm-orchard',{data:'',message:error,status:2});
			}
		 });
		
};

/* ///////////////////////// */

module.exports.log_api003 = function(req, res) {
	
		var objectType= req.body.objectType_item;
		var logid= req.body.id_item;
		var time= req.body.time_item;
		var cte= req.body.cte_item;
		var asset= req.body.asset_item;
		var supplychain_id= req.body.supplychain_item;
		var location= req.body.location_item;
		var product= req.body.product_item;
		var general_key=req.body.general_key;
		var general_val=req.body.general_val;

		var general = {};
		
		for (var i = 0; i <= general_key.length; i++) {
			general[general_key[i]] = general_val[i];
		};

		
		var ref= [];

		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/logs/' + logid,
  			method: 'PUT',
			json: {
				time: parseInt(time),
				ref: ref,
				cte: cte,
				asset: asset,
				supplychain_id: supplychain_id,
				location: location,
				product: product,
				content: JSON.stringify(general)
			}
		};
		
		request(options, function (error, response, body) {
			if(!error && response.statusCode==200){
				var options = {
					url: 'http://18.136.205.13:3000/api/v1/logs/',
					method: 'GET',
			  };
			  
			  request(options, function (error, response, body) {
				  if(!error && response.statusCode==200){
					  var data=JSON.parse(body);
					  res.render('template/api/farm-orchard',{data:data,message:"Successfully updated "+ logid +" to system.",status:1});
				  }else{
					  res.render('template/api/farm-orchard',{data:'',message:"Failed to add "+ logid + " to system.",status:2});
				  }
			   });
			}else if(!error && response.statusCode!=200){
				res.render('template/api/farm-orchard',{data:'',message:"Failed to add "+ logid + " to system.",status:2});
			}else{
				res.render('template/api/farm-orchard',{data:'',message:error,status:2});
			}
		 });
};
