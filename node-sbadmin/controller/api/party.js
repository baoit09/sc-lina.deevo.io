var request = require('request');

module.exports.party_api0012 = function(req, res) {
	
		var partyid=req.param('orgid_key');
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/parties/'+ partyid,
  			method: 'GET',
		};
		
		request(options, function (error, response, body) {
			if(!error){
				var data=[JSON.parse(body)];
				res.render('template/api/party',{data:data,message:"",status:0});
			}else{
				res.render('template/api/party',{data:'',message:error,status:2});
			}
     		});
};

/* ///////////////////////// */

module.exports.party_api0011 = function(req, res) {
	
		var content=req.body.content;
		var name=req.body.name;
		var partyid=req.body.id;
		var parent=req.body.parent;
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/parties',
  			method: 'POST',
			json: {
    				parent: parent,
    				id: partyid,
    				name: name,
    				content: content
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.render('template/api/party',{data:'',message:"Th?c hi?n thành công !!!",status:1});
			}else{
				res.render('template/api/party',{data:'',message:error,status:2});
			}
     		});
		
};

/* ///////////////////////// */

module.exports.party_api0013 = function(req, res) {
	
		var content=req.body.content;
		var name=req.body.name;
		var partyid=req.body.id;
		var parent=req.body.parent;
		var options = {
  			url: 'http://18.136.205.13:3000/api/v1/parties/'+partyid,
  			method: 'PUT',
			json: {
    				parent: parent,
    				name: name,
        			content: content
			}
		};
		
		request(options, function (error, response, body) {
			if(!error){
				res.render('template/api/party',{data:'',message:"Th?c hi?n thành công !!!",status:1});
			}else{
				res.render('template/api/party',{data:'',message:error,status:2});
			}
     		});
		
};

