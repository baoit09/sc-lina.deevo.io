var request = require('request');

module.exports.action_api002 = function(req, res) {
	
		var auditorid=  req.param('type_search');
		var actionid= req.param('orgid_key');

		var options = {
			url: 'http://18.136.205.13:3000/api/v1/auditors/'+auditorid+'/audit-actions/'+actionid,
			method: 'GET',
	  	};

		if (actionid.trim().length===0){
			res.render('template/audit-action',{data:'',message:'Không tìm thấy yêu cầu !!!',status:2});
		}else{
			request(options, function (error, response, body) {
				if(!error && response.statusCode==200){
					var data=[JSON.parse(body)];
					res.render('template/audit-action',{data:data,message:'',status:1});
				}else if(!error && response.statusCode!=200){
					res.render('template/audit-action',{data:'',message:'Không tìm thấy yêu cầu !!!',status:2});
				}else{
					res.render('template/audit-action',{data:'',message:error,status:2});
				}
			});
		}
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
			res.render('template/audit-action',{data:data,message:'',status:1});
		}else if(!error && response.statusCode!=200){
			res.render('template/audit-action',{data:'',message:'Không tìm thấy yêu cầu !!!',status:2});
		}else{
			res.render('template/audit-action',{data:'',message:error,status:2});
		}
	 });

};


/* ///////////////////////// */


module.exports.action_api001 = function(req, res) {
	
	var auditorid=  req.body.auditor_item;
	var actionid=  req.body.id_item;
	var object= req.body.object_item;
	var time= req.body.time_item;
	var location= req.body.location_item;
	var general_key=req.body.general_key;
	var general_val=req.body.general_val;

	var general = {};
	
	for (var i = 0; i <= general_key.length; i++) {
		general[general_key[i]] = general_val[i];
	};


		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/auditors/' + auditorid + '/audit-actions',
  			method: 'POST',
			json: {
					time: parseInt(time),
					auditor:auditorid, 
					location:location,
					objectId: object,
					content: JSON.stringify(general)
			}
		};
		
		request(options, function (error, response, body) {
			if(!error && response.statusCode==200){
				res.render('template/audit-action',{data:'',message:'Thực hiện thành công !!!',status:1});
			}else if(!error && response.statusCode!=200){
				res.render('template/audit-action',{data:'',message:JSON.stringify(response),status:2});
			}else{
				res.render('template/audit-action',{data:'',message:error,status:2});
			}
		 });

};

/* ///////////////////////// */

module.exports.action_api003 = function(req, res) {
	
	var auditorid=  req.body.auditor_item;
	var actionid=  req.body.id_item;
	var object= req.body.object_item;
	var time= req.body.time_item;
	var location= req.body.location_item;
	var general_key=req.body.general_key;
	var general_val=req.body.general_val;

	var general = {};
	
	for (var i = 0; i <= general_key.length; i++) {
		general[general_key[i]] = general_val[i];
	};

		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/auditors/' + auditorid + '/audit-actions/' + actionid,
  			method: 'PUT',
			json: {
					time: parseInt(time),
					auditor:auditorid, 
					location:location,
					objectId: object,
					content: JSON.stringify(general)
			}
		};
		
		request(options, function (error, response, body) {
			if(!error && response.statusCode==200){
				res.render('template/audit-action',{data:'',message:'Thực hiện thành công !!!',status:1});
			}else if(!error && response.statusCode!=200){
				res.render('template/audit-action',{data:'',message:JSON.stringify(response),status:2});
			}else{
				res.render('template/audit-action',{data:'',message:error,status:2});
			}
		 });

};

/* ///////////////////////// */

module.exports.load_data = function(req, res) {

	var str=req.params.action;
	var kq;
	if(str === 'auditor'){
		var options = {
			url: 'http://18.136.205.13:3000/api/v1/auditors/',
			method: 'GET',
		};
	}else if(str === 'location'){
		var options = {
			url: 'http://18.136.205.13:3000/api/v1/locations/',
			method: 'GET',
		};
	}else{
		var options = {
			url: 'http://18.136.205.13:3000/api/v1/products/',
			method: 'GET',
		};
	}
	
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			  res.send(body);
		}
	 });

};
