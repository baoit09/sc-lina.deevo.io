var organization=require('../controller/api/organization');
var party=require('../controller/api/party');
var location=require('../controller/api/location');
var product=require('../controller/api/product');
var asset=require('../controller/api/asset');
var schain=require('../controller/api/supplychain');
var log=require('../controller/api/log');
var auditor=require('../controller/api/auditor');
var action=require('../controller/api/action');

module.exports = function(app) {  

	app.route('/organization/action')
		.get(organization.org_api003)
		.post(organization.org_api002)
		.put(organization.org_api004);

	app.route('/organization')
		.get(function(req,res){
			res.render('template/api/organization',{data:'',message:"",status:0});
		});

	app.route('/party/action')
		.get(party.party_api0012)
		.post(party.party_api0011)
		.put(party.party_api0013);

	app.route('/party')
		.get(function(req,res){
			res.render('template/api/party',{data:'',message:"",status:0});
		});


	app.route('/location')
		.get(location.location_api002)
		.post(location.location_api001)
		.put(location.location_api003);

	app.route('/product')
		.get(product.product_api002)
		.post(product.product_api001)
		.put(product.product_api003);

	app.route('/products/:productid/logs')
		.get(product.product_api004);

	app.route('/asset')
		.get(asset.asset_api002)
		.post(asset.asset_api001)
		.put(asset.asset_api003);

	app.route('/supply-chain')
		.get(schain.schain_api001)
		.post(schain.schain_api002)
		.put(schain.schain_api003);

	app.route('/supply-chain/orgs')
		.get(schain.schain_api010);
	app.route('/supply-chain/parties')
		.get(schain.schain_api011);
	app.route('/supply-chain/locations')
		.get(schain.schain_api012);
	app.route('/supply-chain/assets')
		.get(schain.schain_api013);
	app.route('/supply-chain/products')
		.get(schain.schain_api014);

	app.route('/supply-chain/action/:schainid/logs')
		.get(schain.schain_api004);

	app.route('/log')
		.get(log.log_api002)
		.post(log.log_api001)
		.put(log.log_api003);

	app.route('/auditor')
		.get(auditor.auditor_api002)
		.post(auditor.auditor_api001)
		.put(auditor.auditor_api003);

	app.route('/action/:auditorid/audit-actions')
		.get(action.action_api002)
		.post(action.action_api001)
		.put(action.action_api003);

	app.route('/action/:auditorid/audit-actions/:actionid')
		.get(action.action_api002)
		.post(action.action_api001)
		.put(action.action_api003);
	
}
