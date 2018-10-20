var request = require('request');

module.exports.action_api002 = function(req, res) {
	
	var actiontype=  req.param('type_search');
	var actionid= req.param('orgid_key');
	var url;

	if(actiontype==0){
		url= 'http://18.136.205.13:3000/api/v1/audit-actions/'+ actionid;
	}else{
		url= 'http://18.136.205.13:3000/api/v1/audit-actions?auditor='+actiontype;
	}

	var options = {
		url: url,
		method: 'GET',
	};
	
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			if(actiontype==0){
				var data=[JSON.parse(body)];
				res.render('template/api/audit-action',{data:data,message:'',status:0});
			}else{
				var data=JSON.parse(body);
				if(Object.keys(data).length>0){
					res.render('template/api/audit-action',{data:data,message:'',status:0});
				}else{
					res.render('template/api/audit-action',{data:data,message:'Không tìm thấy yêu cầu !!!',status:2});
				}
			}
		}else if(!error && response.statusCode!=200){
			res.render('template/api/audit-action',{data:'',message:'Không tìm thấy yêu cầu !!!',status:2});
		}else{
			res.render('template/api/audit-action',{data:'',message:error,status:2});
		}
	 });
};


/* ///////////////////////// */

module.exports.action_api004 = function(req, res) {
	
	var auditorid=  req.param('type_search');
	var actionid= req.param('orgid_key');
	var options = {
		  url: 'http://18.136.205.13:3000/api/v1/audit-actions/',
		  method: 'GET',
	};
	
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			var data=JSON.parse(body);
			res.render('template/api/audit-action',{data:data,message:'',status:1});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/audit-action',{data:'',message:'Không tìm thấy yêu cầu !!!',status:2});
		}else{
			res.render('template/api/audit-action',{data:'',message:error,status:2});
		}
	 });

};


/* ///////////////////////// */


module.exports.action_api001 = function(req, res) {
	
	var auditor=  req.body.auditor_item;
	// var auditorid=  req.body.auditor_id;
	var actionid=  req.body.id_item;
	var object= req.body.product_item;
	var time= req.body.time_item;
	var location= req.body.location_item;

	var general_key=req.body.general_key;
	var general_val=req.body.general_val;

	var general = {};
	
	for (var i = 0; i <= general_key.length; i++) {
		general[general_key[i]] = general_val[i];
	};


		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/auditors/' + auditor + '/audit-actions',
  			method: 'POST',
			json: {
					time: parseInt(time),
					auditor:auditor, 
					location:location,
					objectId: object,
					content: JSON.stringify(general)
			}
		};
		
		request(options, function (error, response, body) {
			if(!error && response.statusCode==200){
				var options = {
					url: 'http://18.136.205.13:3000/api/v1/audit-actions/',
					method: 'GET',
			  	};
			  
			  request(options, function (error, response, body) {
				  if(!error && response.statusCode==200){
					  var data=JSON.parse(body);
					  res.render('template/api/audit-action',{data:data,message:'Thực hiện thành công !!!',status:1});
				  }else if(!error && response.statusCode!=200){
					  res.render('template/api/audit-action',{data:'',message:'Không tìm thấy yêu cầu !!!',status:2});
				  }else{
					  res.render('template/api/audit-action',{data:'',message:error,status:2});
				  }
			   });
			}else if(!error && response.statusCode!=200){
				res.render('template/api/audit-action',{data:'',message:JSON.stringify(response),status:2});
			}else{
				res.render('template/api/audit-action',{data:'',message:error,status:2});
			}
		 });

};

/* ///////////////////////// */

module.exports.action_api003 = function(req, res) {
	
	var auditor=  req.body.auditor_item;
	// var auditorid=  req.body.auditor_id;
	var actionid=  req.body.id_item;
	var object= req.body.product_item;
	var time= req.body.time_item;

	var location= req.body.location_item;
	var general_key=req.body.general_key;
	var general_val=req.body.general_val;

	var general = {};
	
	for (var i = 0; i <= general_key.length; i++) {
		general[general_key[i]] = general_val[i];
	};

		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/auditors/' + auditor+ '/audit-actions/' + actionid,
  			method: 'PUT',
			json: {
					time: parseInt(time),
					auditor:auditor, 
					location:location,
					objectId: object,
					content: JSON.stringify(general)
			}
		};
		
		request(options, function (error, response, body) {
			if(!error && response.statusCode==200){
				var options = {
					url: 'http://18.136.205.13:3000/api/v1/audit-actions/',
					method: 'GET',
			  };
			  
			  request(options, function (error, response, body) {
				  if(!error && response.statusCode==200){
					  var data=JSON.parse(body);
					  res.render('template/api/audit-action',{data:data,message:'Thực hiện thành công !!!',status:1});
				  }else if(!error && response.statusCode!=200){
					  res.render('template/api/audit-action',{data:'',message:'Không tìm thấy yêu cầu !!!',status:2});
				  }else{
					  res.render('template/api/audit-action',{data:'',message:error,status:2});
				  }
			   });
			}else if(!error && response.statusCode!=200){
				res.render('template/api/audit-action',{data:'',message:JSON.stringify(response),status:2});
			}else{
				res.render('template/api/audit-action',{data:'',message:error,status:2});
			}
		 });

};

/* ///////////////////////// */