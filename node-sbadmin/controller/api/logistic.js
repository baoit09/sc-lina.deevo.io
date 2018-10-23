var request = require('request');

module.exports.logistic_api002 = function(req, res) {
		var user=req.user.username;
		var logistic_id=req.param('orgid_key');
	
		var options = {
			url: 'http://18.136.205.13:3000/api/v1/logistic-units/'+ logistic_id,
			method: 'GET',
		};
		
		request(options, function (error, response, body) {
			if(!error && response.statusCode==200){
				var data=[JSON.parse(body)];
				res.render('template/api/logistic',{data:data,user:user,message:'',status:0});
			}else if(!error && response.statusCode!=200){
				res.render('template/api/logistic',{data:'',user:user,message:'No data found!',status:2});
			}else{
				res.render('template/api/logistic',{data:'',user:user,message:error,status:2});
			}
		 });
};


/* ///////////////////////// */

module.exports.logistic_api004 = function(req, res) {
	var user=req.user.username;
    var logistic_id=req.param('orgid_key');
	
    var options = {
        url: 'http://18.136.205.13:3000/api/v1/logistic-units',
        method: 'GET',
    };
    
    request(options, function (error, response, body) {
        if(!error && response.statusCode==200){
            var data=JSON.parse(body);
            res.render('template/api/logistic',{data:data,user:user,message:'',status:0});
        }else if(!error && response.statusCode!=200){
            res.render('template/api/logistic',{data:'',user:user,message:'No data found!',status:2});
        }else{
            res.render('template/api/logistic',{data:'',user:user,message:error,status:2});
        }
     });

};


/* ///////////////////////// */


module.exports.logistic_api001 = function(req, res) {
		var user=req.user.username;
		var objectType= req.body.objectType_item;
		var logistic_id= req.body.id_item;
        var name= req.body.name_item;
		var location= req.body.location_item;

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
		  
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/logistic-units',
  			method: 'POST',
			json: {
				objectType: objectType,
				id: logistic_id,
                name: name,
				parent: location,
				content: JSON.stringify(general)
				}
		};

		request(options, function (error, response, body) {
			if(!error && response.statusCode==200){
				var options = {
					url: 'http://18.136.205.13:3000/api/v1/logistic-units',
					method: 'GET',
			  };
			  
			  request(options, function (error, response, body) {
				  if(!error && response.statusCode==200){
					  var data=JSON.parse(body);
					  res.render('template/api/logistic',{data:data,user:user,message:"Successfully added "+ name +" to system.",status:1});
				  }else{
					  res.render('template/api/logistic',{data:'',user:user,message:"Failed to add "+ name + " to system.",status:2});
				  }
			   });
			}else if(!error && response.statusCode!=200){
				res.render('template/api/logistic',{data:'',user:user,message:"Failed to add "+ name + " to system.",status:2});
			}else{
				res.render('template/api/logistic',{data:'',user:user,message:error,status:2});
			}
		 });
		
};

/* ///////////////////////// */

module.exports.logistic_api003 = function(req, res) {
	var user=req.user.username;
    var objectType= req.body.objectType_item;
    var logistic_id= req.body.id_item;
    var name= req.body.name_item;
    var location= req.body.location_item;

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
      
    var options = {
          url: 'http://18.136.205.13:3000/api/v1/logistic-units/'+logistic_id,
          method: 'PUT',
        json: {
            objectType: objectType,
            id: logistic_id,
            name: name,
            parent: location,
            content: JSON.stringify(general)
            }
    };
		
		request(options, function (error, response, body) {
			if(!error && response.statusCode==200){
				var options = {
					url: 'http://18.136.205.13:3000/api/v1/logistic-units',
					method: 'GET',
			  };
			  
			  request(options, function (error, response, body) {
				  if(!error && response.statusCode==200){
					  var data=JSON.parse(body);
					  res.render('template/api/logistic',{data:data,user:user,message:"Successfully updated "+ name +" to system.",status:1});
				  }else{
					  res.render('template/api/logistic',{data:'',user:user,message:"Failed to add "+ name + " to system.",status:2});
				  }
			   });
			}else if(!error && response.statusCode!=200){
				res.render('template/api/logistic',{data:'',user:user,message:"Failed to add "+ name + " to system.",status:2});
			}else{
				res.render('template/api/logistic',{data:'',user:user,message:error,status:2});
			}
		 });
};