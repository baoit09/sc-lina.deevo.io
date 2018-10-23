var request = require('request');
module.exports.modal_product = function(req, res) {
	var obj=JSON.parse(req.body.content);
	 res.send(
	 "<form role = 'form' id='form-post' method='POST' action='"+req.body.action+"'>"+
			"<div class='modal-content'>"+
				"<div class='modal-header'>"+
					"<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button>"+
					"<h4 class='modal-title' id='myModalLabel'>PRODUCT</h4>"+
				"</div>"+
				"<div id='myDIV'>"+
					"<div class='modal-body'>"+
						"<div class='group-1'>"+
							"<div class='form-group col-3' id='iditem'>"+
								"<label>ID</label>"+
								"<input class='form-control box-co' name='id_item' value='"+req.body.id+"'>"+
							"</div>"+
							"<div class='form-group'>"+
								"<label>Name (*)</label>"+
								"<input class='form-control box-co' name='name_item' value='"+req.body.name+"'>"+
							"</div>"+ 
							"<div class='form-group col-3'>"+
								"<label>Location (*)</label>"+
								"<select class='form-control box-co' id='parent_item' name='parent_item' >"+
									"<option value='0'>--- select ---</option>"+
								"</select>"+
							"</div>"+									
						"</div>"+  
						"<div class='group-2'>"+
							"<div class='panel'>"+
								"<div class='panel-body'>"+
									"<ul class='nav nav-tabs'>"+
										"<li class='active'><a href='#general' data-toggle='tab' style='font-weight: bold;'>GS1</a>"+
										"</li>"+
									 "</ul>"+
									"<div class='tab-content'>"+
										"<div class='tab-pane fade in active' id='general'>"+
											"<div class='row show-grid'>"+
												"<table class='table table-content' id='tbl-general'>"+
													"<tbody>"+
															"<tr class='general-rows general-1'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='GS1 GLN' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_GLN' value='"+obj['GS1 GLN']+"'></th>"+																					
															"</tr>"+
															"<tr class='general-rows general-2'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='GS1 GSIN' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_GSIN' value='"+obj['GS1 GSIN']+"'></th>"+																				
															"</tr>"+		
															"<tr class='general-rows general-3'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='GS1 SSCC' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_SSCC' value='"+obj['GS1 SSCC']+"'></th>"+																					
															"</tr>"+
															"<tr class='general-rows general-4'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='GS1 GTIN' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_GTIN' value='"+obj['GS1 GTIN']+"'></th>"+																					
															"</tr>"+
															"<tr class='general-rows general-5'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='GS1 GINC' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_GINC' value='"+obj['GS1 GINC']+"'></th>"+																					
															"</tr>"+
															"<tr class='general-rows general-6'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='GS1 GRAI' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_GRAI' value='"+obj['GS1 GRAI']+"'></th>"+																					
															"</tr>"+
															"<tr class='general-rows general-7'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='GS1 GIAI' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_GIAI' value='"+obj['GS1 GIAI']+"'></th>"+																					
															"</tr>"+
															"<tr class='general-rows general-8'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='GS1 GSRN' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_GSRN' value='"+obj['GS1 GSRN']+"'></th>"+																					
															"</tr>"+
															"<tr class='general-rows general-9'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='GS1 GDTI' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_GDTI' value='"+obj['GS1 GDTI']+"'></th>"+																					
															"</tr>"+
															"<tr class='general-rows general-10'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='GS1 GCN' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_GCN' value='"+obj['GS1 GCN']+"'></th>"+																					
															"</tr>"+
															"<tr class='general-rows general-11'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='GS1 CPID' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_CPID' value='"+obj['GS1 CPID']+"'></th>"+																					
															"</tr>"+
															"<tr class='general-rows general-12'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Scientific Name' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Scientific_Name' value='"+obj['Scientific Name']+"'></th>"+																					
															"</tr>"+
															"<tr class='general-rows general-13'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Quantity' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Quantity' value='"+obj['Quantity']+"'></th>"+																					
															"</tr>"+		
															"<tr class='general-rows general-14'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Weight' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Weight' value='"+obj['Weight']+"'></th>"+																					
															"</tr>"+	
															"<tr class='general-rows general-15'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Price' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Price' value='"+obj['Price']+"'></th>"+																					
															"</tr>"+	
															"<tr class='general-rows general-16'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Destination' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Destination' value='"+obj['Destination']+"'></th>"+																					
															"</tr>"+	
															"<tr class='general-rows general-16'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Reference Size' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Reference_Size' value='"+obj['Reference Size']+"'></th>"+																					
															"</tr>"+
															"<tr class='general-rows general-17'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Source Zone' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Source_Zone' value='"+obj['Source Zone']+"'></th>"+																					
															"</tr>"+	
															"<tr class='general-rows general-18'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Source Date' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Source_Date' value='"+obj['Source Date']+"'></th>"+																					
															"</tr>"+	
															"<tr class='general-rows general-19'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Fresh Flag' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Fresh_Flag' value='"+obj['Fresh Flag']+"'></th>"+																					
															"</tr>"+	
															"<tr class='general-rows general-20'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Freezing Flag' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Freezing_Flag' value='"+obj['Freezing Flag']+"'></th>"+																					
															"</tr>"+		
															"<tr class='general-rows general-21'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Receiving Date' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Receiving_Date' value='"+obj['Receiving Date']+"'></th>"+																					
															"</tr>"+	
															"<tr class='general-rows general-22'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Storage Condition' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Storage_Condition' value='"+obj['Storage Condition']+"'></th>"+																					
															"</tr>"+	
															"<tr class='general-rows general-23'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Invoice No' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Invoice' value='"+obj['Invoice No']+"'></th>"+																					
															"</tr>"+	
															"<tr class='general-rows general-24'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Ordered Receipt No' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Ordered_Receipt' value='"+obj['Ordered Receipt No']+"'></th>"+																					
															"</tr>"+	
															"<tr class='general-rows general-25'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Specifications' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Specifications' value='"+obj['Specifications']+"'></th>"+																				
															"</tr>"+	
															"<tr class='general-rows general-26'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Code' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Code' value='"+obj['Code']+"'></th>"+																					
															"</tr>"+	
															"<tr class='general-rows general-27'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Stored Location' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Stored_Location' value='"+obj['Stored Location']+"'></th>"+																					
															"</tr>"+	
															"<tr class='general-rows general-28'>"+
																"<th width='200px' class='co-th '> <input onchange='' class='form-control box-co' name='general_key' value='Structure' readonly></th>"+
																"<th class='co-th'> <input class='form-control box-co' name='general_val' id='general_Structure' value='"+obj['Structure']+"'></th>"+																					
															"</tr>"+	
													"</tbody>"+
												"</table>"+
											"</div>"+
										"</div>"+																		
									"</div>"+
								"</div>"+
							"</div>"+
						 "</div>"+
					"</div>"+
				"</div>"+
				"<div class='modal-footer'>"+
					"<button type='button' class='btn btn-info' data-dismiss='modal'>Close</button>"+
					"<button type='submit' name='send' id='btnclick' class='btn btn-success'>Save</button>"+
				"</div>"+
			"</div>"+
		"</form>"

	);
};

module.exports.modal_listlog = function(req, res) {


		var productid=req.body.keyseach;
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/products/'+ productid +'/logs',
  			method: 'GET',
		};
		
	request(options, function (error, response, body) {
		if(!error && response.statusCode==200){
			var data=JSON.parse(body);
			var str='<div class="modal-content">'
					str+='<div class="modal-header">'
						str+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
						str+='<h4 class="modal-title" id="myModalLabel">PRODUCTS OF LOGS</h4>'
					str+='</div>'
					str+='<div id="myDIV">'
						str+='<div class="modal-body">'
							str+='<div class="table-responsive">'
								str+=' <table class="table mytable">'    
									str+='<thead>'
										str+='<tr>'
											str+='<th class="row-title">ID</th>'
											str+='<th class="row-title">Object Type</th>'
											str+='<th class="row-title">Time</th>'
											str+='<th class="row-title">CTE</th>'
											str+='<th class="row-title">Supplychain ID</th>'
											str+='<th class="row-title">Asset</th>'
											str+='<th class="row-title">Product</th>'
											str+='<th class="row-title">Location</th>'
										str+='</tr>'
									str+='</thead>'
									str+='<tbody>'
										for(var c in data){
											str+='<tr class="row-1">'
												str+='<th class="id">'+data[c]['id']+'</th>'
												str+='<th class="obj">'+data[c]['objectType']+'</th>'
												str+='<th class="location">'+data[c]['time']+'</th>'
												str+='<th class="time">'+data[c]['cte']+'</th>'
												str+='<th class="cte">'+data[c]['supplychain_id']+'</th>'
												str+='<th class="supplychain_id">'+data[c]['asset']+'</th>'
												str+='<th class="asset">'+data[c]['product']+'</th>'
												str+='<th class="product">'+data[c]['location']+'</th>'
											str+='</tr>'
										}
									str+='</tbody>'
								str+='</table>'
							str+='</div>'
						str+='</div>'
					str+='</div>'
					str+='<div class="modal-footer">'
						str+='<button type="button" class="btn btn-info" data-dismiss="modal">Close</button>'
					str+='</div>'
				str+='</div>'
				
			res.send(str);

		}

    });
};

