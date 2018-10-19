var request = require('request');

module.exports.log_api002 = function(req, res) {
	
		var logid=req.param('orgid_key');
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/logs/'+ logid,
  			method: 'GET',
		};
		
		request(options, function (error, response, body) {
			if(!error && response.statusCode==200){
				var data=[JSON.parse(body)];
				res.render('template/api/log',{data:data,message:'',status:0});
			}else if(!error && response.statusCode!=200){
				res.render('template/api/log',{data:'',message:'Không tìm thấy yêu cầu !!!',status:2});
			}else{
				res.render('template/api/log',{data:'',message:error,status:2});
			}
		 });
	
};


/* ///////////////////////// */

module.exports.log_api004 = function(req, res) {
	
	var logid=req.param('orgid_key');
	var options = {
		  url: 'http://18.136.205.13:3000/api/v1/logs/',
		  method: 'GET',
	};
	
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			var data=JSON.parse(body);
			res.render('template/api/log',{data:data,message:'',status:0});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/log',{data:'',message:'Không tìm thấy yêu cầu !!!',status:2});
		}else{
			res.render('template/api/log',{data:'',message:error,status:2});
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
		var lable_key=req.body.lable_key;
		var lable_val=req.body.lable_val;
	
		var general = {};
		var lable= {};
		
		for (var i = 0; i <= general_key.length; i++) {
			general[general_key[i]] = general_val[i];
		};

		for (var i = 0; i <= lable_key.length; i++) {
			lable[lable_key[i]] = lable_val[i];
		};

		general["Lable"]=lable;
		  
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
					  res.render('template/api/log',{data:data,message:'Thực hiện thành công !!!',status:1});
				  }else if(!error && response.statusCode!=200){
					  res.render('template/api/log',{data:'',message:'Không tìm thấy yêu cầu !!!',status:2});
				  }else{
					  res.render('template/api/log',{data:'',message:error,status:2});
				  }
			   });
			}else if(!error && response.statusCode!=200){
				res.render('template/api/log',{data:'',message:JSON.stringify(response),status:2});
			}else{
				res.render('template/api/log',{data:'',message:error,status:2});
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
		var lable_key=req.body.lable_key;
		var lable_val=req.body.lable_val;

		var general = {};
		var lable= {};
		
		for (var i = 0; i <= general_key.length; i++) {
			general[general_key[i]] = general_val[i];
		};

		for (var i = 0; i <= lable_key.length; i++) {
			lable[lable_key[i]] = lable_val[i];
		};

		general["Lable"]=lable;
		
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
					  res.render('template/api/log',{data:data,message:'Thực hiện thành công !!!',status:1});
				  }else if(!error && response.statusCode!=200){
					  res.render('template/api/log',{data:'',message:'Không tìm thấy yêu cầu !!!',status:2});
				  }else{
					  res.render('template/api/log',{data:'',message:error,status:2});
				  }
			   });
			}else if(!error && response.statusCode!=200){
				res.render('template/api/log',{data:'',message:JSON.stringify(response),status:2});
			}else{
				res.render('template/api/log',{data:'',message:error,status:2});
			}
		 });
};

