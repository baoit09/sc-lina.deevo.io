var organization=require('../controller/api/organization');
var party=require('../controller/api/party');
var location=require('../controller/api/location');
var product=require('../controller/api/product');
var asset=require('../controller/api/asset');
var schain=require('../controller/api/supplychain');
var log=require('../controller/api/log');
var auditor=require('../controller/api/auditor');
var action=require('../controller/api/audit-action');
var request = require('request');
var modal=require('../controller/api/ajax');

module.exports = function(app) {  

	app.get('/demo',function(req,res){
		res.render('abc',{data:'',message:'',status:0});
	});

	app.route('/organization/action')
		.get(organization.org_api003)
		.post(organization.org_api002)
		.put(organization.org_api004);

	app.route('/organization')
		.get(organization.org_api005);

	app.route('/party/action')
		.get(party.party_api0012)
		.post(party.party_api0011)
		.put(party.party_api0013);

	app.route('/party')
		.get(party.party_api0014);


	app.route('/location/action')
		.get(location.location_api002)
		.post(location.location_api001)
		.put(location.location_api003);

	app.route('/location')
		.get(location.location_api004);


	app.route('/product/action')
		.get(product.product_api002)
		.post(product.product_api001)
		.put(product.product_api003);

	app.route('/products/ajaxlogs')
		.post(modal.modal_listlog);

	app.route('/product/ajaxproduct')
		.post(modal.modal_product);

	app.route('/product')
		.get(product.product_api005);


	app.route('/asset/action')
		.get(asset.asset_api002)
		.post(asset.asset_api001)
		.put(asset.asset_api003);

	app.route('/asset')
		.get(asset.asset_api004);


	app.route('/supply-chain')
		.get(schain.schain_api001)
		.post(schain.schain_api002)
		//.put(schain.schain_api003);

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
	app.route('/supply-chain/scms')
		.get(schain.schain_api015);

	app.route('/log/action')
		.get(log.log_api002)
		.post(log.log_api001)
		.put(log.log_api003);

	app.route('/log')
		.get(log.log_api004);

	app.route('/auditor/action')
		.get(auditor.auditor_api002)
		.post(auditor.auditor_api001)
		.put(auditor.auditor_api003);

	app.route('/auditor')
		.get(auditor.auditor_api004);


	app.route('/audit-action/action')
		.get(action.action_api002)
		.post(action.action_api001)
		.put(action.action_api003);

	app.route('/audit-action')
		.get(action.action_api004);

	app.route('/loaddata/:action')
		.post(action.load_data);
	
}
