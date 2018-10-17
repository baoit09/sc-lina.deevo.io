var request = require('request');

module.exports.auditor_api002 = function(req, res) {
	
		var auditorid=req.param('orgid_key');
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/auditors/'+ auditorid,
  			method: 'GET',
		};
		
		request(options, function (error, response, body) {
			if(!error && response.statusCode==200){
				var data=[JSON.parse(body)];
				res.render('template/auditor',{data:data,message:"",status:0});
			}else if(!error && response.statusCode!=200){
				res.render('template/auditor',{data:'',message:'Không tìm thấy yêu cầu !!!',status:2});
			}else{
				res.render('template/auditor',{data:'',message:error,status:2});
			}
		 });
	
};


/* ///////////////////////// */

module.exports.auditor_api004 = function(req, res) {
	
	var auditorid=req.param('orgid_key');
	var options = {
		  url: 'http://18.136.205.13:3000/api/v1/auditors/',
		  method: 'GET',
	};
	
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			var data=JSON.parse(body);
			res.render('template/auditor',{data:data,message:"",status:0});
		}else if(!error && response.statusCode!=200){
			res.render('template/auditor',{data:'',message:'Không tìm thấy yêu cầu !!!',status:2});
		}else{
			res.render('template/auditor',{data:'',message:error,status:2});
		}
	 });

};


/* ///////////////////////// */

module.exports.auditor_api001 = function(req, res) {
	
		var name=req.body.name_item;
		var auditorid=req.body.id_item;
		
		var general_key=req.body.general_key;
		var general_val=req.body.general_val;
		
		var general = {};

		for (var i = 0; i <= general_key.length; i++) {
			general[general_key[i]] = general_val[i];
		};

		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/auditors',
  			method: 'POST',
			json: {
    				id: auditorid,
    				name: name,
    				content: JSON.stringify(general)
			}
		};
		
		request(options, function (error, response, body) {
			if(!error && response.statusCode==200){
				res.render('template/auditor',{data:'',message:"Thực hiện thành công !!!",status:1});
			}else if(!error && response.statusCode!=200){
				res.render('template/auditor',{data:'',message: JSON.stringify(response),status:2});
			}else{
				res.render('template/auditor',{data:'',message:error,status:2});
			}
		 });
	
		
};

/* ///////////////////////// */

module.exports.auditor_api003 = function(req, res) {
	
		var name=req.body.name_item;
		var auditorid=req.body.id_item;
		
		var general_key=req.body.general_key;
		var general_val=req.body.general_val;
		
		var general = {};

		for (var i = 0; i <= general_key.length; i++) {
			general[general_key[i]] = general_val[i];
		};

		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/auditors/'+ auditorid,
  			method: 'PUT',
			json: {
    				name: name,
					content: JSON.stringify(general)
			}
		};
		
		request(options, function (error, response, body) {
			if(!error && response.statusCode==200){
				res.render('template/auditor',{data:'',message:"Thực hiện thành công !!!",status:1});
			}else if(!error && response.statusCode!=200){
				res.render('template/auditor',{data:'',message: JSON.stringify(response),status:2});
			}else{
				res.render('template/auditor',{data:'',message:error,status:2});
			}
		 });
		
};

