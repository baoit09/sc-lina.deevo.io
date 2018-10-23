var request = require('request');
let baseURL = 'http://18.136.205.13:3000/api/v1';

module.exports.general_log_api001 = function(req, res) {

	var logVM = 
	{	
		Role: req.param('role'),		
		EventName: req.param('eventName'),
		Header : "Logs of " + req.param('eventName'),
		Logs : [],
		LogsByEventName : [],
	}
  
	request({ url: baseURL + '/logs/', method: 'GET'}, function (error, response, body) {

		logVM.Logs = buildArrayNonDeleted(error, response, body);

		buildLogsByEventName(logVM);

		res.render('template/api/general-log', { logVM:logVM, message:'', status:0});
	});
};

function buildLogsByEventName(logVM)
{
	logVM.Logs.forEach(function(item)
	{
		if(item.cte === logVM.EventName)
		{
			logVM.LogsByEventName.push(item);	
		}
	});
}

function buildArrayNonDeleted(error, response, body)
{
	if(error || response.statusCode !== 200)
		return [];

	var items = [];
	var noneDeleteditems = [];
	var data = JSON.parse(body);

	if ( !(data instanceof Array)  )			{
		items.push(data);
	}
	else
	{
		items = data;	
	}			
	items.forEach(function(item){
		if(item.content)
		{
			try {
				item.content = JSON.parse(item.content);
				if(item.content._status != "Deleted")
				{
					noneDeleteditems.push(item)
				}
			} catch(e) {}					
		}
		else
		{
			noneDeleteditems.push(item)
		}
	})

	return noneDeleteditems;
}

module.exports.general_log_api002 = function(req, res) {
	
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

	var content_key=req.body.content_key;
	var content_val=req.body.content_val;

	var general = {};
	
	for (var i = 0; i <= general_key.length; i++) {
		general[general_key[i]] = general_val[i];
	};

	for (var i = 0; i <= content_key.length; i++) {
		general[content_key[i]] = content_val[i];
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
				  res.render('template/api/log',{data:data,message:"Successfully added "+ logid +" to system.",status:1});
			  }else{
				  res.render('template/api/log',{data:'',message:"Failed to add "+ logid + " to system.",status:2});
			  }
		   });
		}else if(!error && response.statusCode!=200){
			res.render('template/api/log',{data:'',message:"Failed to add "+ logid + " to system.",status:2});
		}else{
			res.render('template/api/log',{data:'',message:error,status:2});
		}
	 });
	
};
