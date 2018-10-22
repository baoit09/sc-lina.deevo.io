var request = require('request');

let baseURL = 'http://18.136.205.13:3000/api/v1';

module.exports.dashboard_api001 = function(req, res) {

	var dashboard = {
		Orgs : [],
		Parties : [],
		Locations : [],
		SupplyChains : [],
		CTELogs : []
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

				request({ url: baseURL + '/supply-chains/', method: 'GET'}, function (error, response, body) 
				{				
					dashboard.SupplyChains = buildArrayNonDeleted(error, response, body);	

					request({ url: baseURL + '/logs/', method: 'GET'}, function (error, response, body) 
					{				
						dashboard.CTELogs = buildArrayNonDeleted(error, response, body);	
							
						res.render('template/index', { dashboard: dashboard, message:"", status:0});		
					});
				});
			});
		});
	});
};

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