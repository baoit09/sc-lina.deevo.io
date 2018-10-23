var request = require('request');

module.exports.view_product = function(req, res) {
		var user=req.user.username;
		var productid=req.param('orgid_key');
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/products/'+ productid,
  			method: 'GET',
		};
		
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			var data=[JSON.parse(body)];
			res.render('template/api/view-history',{data:data,user:user,message:"",status:0});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/view-history',{data:'',user:user,message:'No data found!',status:2});
		}else{
			res.render('template/api/view-history',{data:'',user:user,message:error,status:2});
		}
     	});
};

/* ///////////////////////// */

module.exports.product_api004 = function(req, res) {
		var user=req.user.username;
		var productid=req.params.productid;
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/products/'+ productid +'/logs',
  			method: 'GET',
		};
		
	request(options, function (error, response, body) {
	res.send(body);
     	});
};

/* ///////////////////////// */

module.exports.views_products = function(req, res) {
		var user=req.user.username;
		var productid=req.params.productid;
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/products/',
  			method: 'GET',
		};
		
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			var data=JSON.parse(body);
			res.render('template/api/view-history',{data:data,user:user,message:"",status:0});
		}else if(!error && response.statusCode!=200){
			res.render('template/api/view-history',{data:'',user:user,message:'No data found!',status:2});
		}else{
			res.render('template/api/view-history',{data:'',user:user,message:error,status:2});
		}
     	});
};

/* ///////////////////////// */




