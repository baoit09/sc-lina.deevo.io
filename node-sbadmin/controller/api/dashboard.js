var request = require('request');

let baseURL = 'http://18.136.205.13:3000/api/v1';

module.exports.dashboard_api001 = function(req, res) {
	var user=req.user.username;
	var dashboard = {
		Orgs : [],
		Parties : [],
		Locations : [],
		Products : [],
		SupplyChains : [],
		CTELogs : [],
		lastUpdated : new Date().toUTCString()
	};		

	request({ url: baseURL + '/orgs/', method: 'GET'}, function (error, response, body) 
	{
		dashboard.Orgs = buildArrayNonDeleted(error, response, body);

		request({ url: baseURL + '/parties/', method: 'GET'}, function (error, response, body) 
		{
			dashboard.Parties = buildArrayNonDeleted(error, response, body);

			request({ url: baseURL + '/locations/', method: 'GET'}, function (error, response, body) 
			{				
				dashboard.Locations = buildArrayNonDeleted(error, response, body);

				request({ url: baseURL + '/products/', method: 'GET'}, function (error, response, body) 
				{				
					dashboard.Products = buildArrayNonDeleted(error, response, body);	

					request({ url: baseURL + '/supply-chains/', method: 'GET'}, function (error, response, body) 
					{				
						dashboard.SupplyChains = buildArrayNonDeleted(error, response, body);	

						request({ url: baseURL + '/logs/', method: 'GET'}, function (error, response, body) 
						{				
							dashboard.CTELogs = buildArrayNonDeleted(error, response, body);
							
							convertIDToName(dashboard);
								
							res.render('template/index', { dashboard: dashboard,user:user, message:"", status:0});		
						});
					});
				});
			});
		});
	});
};

function convertIDToName(dashboard)
{
	dashboard.CTELogs.forEach(function(item)
	{
		
		item.timeUTC = item.time ? new Date(item.time).toUTCString() : "";
		item.cte = item.cte ? item.cte : "";
		item.productName =  item.product; //findName(item.product, dashboard.Products);
		item.locationName = item.location; //findName(item.location, dashboard.Locations);
		item.supplychainName = item.supplychain_id; //findName(item.supplychain_id, dashboard.SupplyChains);
	})
}

function findName(id, list)
{
	if(id && list){
		for(i=0; i < list.length; i++)
		{
			if(list[i].id === id)
				return list[i].name;
		}
	}
	return "";
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