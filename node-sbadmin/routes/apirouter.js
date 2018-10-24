var organization=require('../controller/api/organization');
var party=require('../controller/api/party');
var location=require('../controller/api/location');
var product=require('../controller/api/product');
var asset=require('../controller/api/asset');
var schain=require('../controller/api/supplychain');
var log=require('../controller/api/log');
var auditor=require('../controller/api/auditor');
var action=require('../controller/api/audit-action');
var logistic=require('../controller/api/logistic');
var modal=require('../controller/api/ajax');
var loadajax=require('../controller/api/loaddata');
var history=require('../controller/api/view-history');
var history=require('../controller/api/view-history');
var generalLog=require('../controller/api/general-log');

module.exports = function(app) {  


	app.get('/permission',isAuthenticated,function(req,res){
		var user=req.user.username;
		res.render('template/api/permission',{data:'',user:user,message:'',status:0});
	});

	app.route('/view-history')
		.get(isAuthenticated,history.views_products);

	app.route('/view-history/action')
		.get(isAuthenticated,history.view_product);


	app.route('/organization/action')
		.get(isAuthenticated, organization.org_api003)
		.post(isAuthenticated, organization.org_api002)
		.put(isAuthenticated, organization.org_api004);

	app.route('/organization')
		.get(isAuthenticated, organization.org_api005);

	app.route('/party/action')
		.get(isAuthenticated, party.party_api0012)
		.post(isAuthenticated, party.party_api0011)
		.put(isAuthenticated, party.party_api0013);

	app.route('/party')
		.get(isAuthenticated, party.party_api0014);

	app.route('/location/action')
		.get(isAuthenticated, location.location_api002)
		.post(isAuthenticated, location.location_api001)
		.put(isAuthenticated, location.location_api003);

	app.route('/location')
		.get(isAuthenticated, location.location_api004);


	app.route('/product/action')
		.get(isAuthenticated, product.product_api002)
		.post(isAuthenticated, product.product_api001)
		.put(isAuthenticated, product.product_api003);

	app.route('/products/ajaxlogs')
		.post(modal.modal_listlog);

	app.route('/product/ajaxproduct')
		.post(modal.modal_product);

	app.route('/product')
		.get(isAuthenticated, product.product_api005);


	app.route('/asset/action')
		.get(isAuthenticated, asset.asset_api002)
		.post(isAuthenticated, asset.asset_api001)
		.put(isAuthenticated, asset.asset_api003);

	app.route('/asset')
		.get(isAuthenticated, asset.asset_api004);


	app.route('/supply-chain')
		.get(isAuthenticated, schain.schain_api001)
		.post(isAuthenticated, schain.schain_api002)
		//.put(schain.schain_api003);

	app.route('/supply-chain/orgs')
		.get(isAuthenticated, schain.schain_api010);
	app.route('/supply-chain/parties')
		.get(isAuthenticated, schain.schain_api011);
	app.route('/supply-chain/locations')
		.get(isAuthenticated, schain.schain_api012);
	app.route('/supply-chain/assets')
		.get(isAuthenticated, schain.schain_api013);
	app.route('/supply-chain/products')
		.get(isAuthenticated, schain.schain_api014);
	app.route('/supply-chain/scms')
		.get(isAuthenticated, schain.schain_api015);
	app.route('/supply-chain/templates')
		.get(isAuthenticated, schain.schain_api016);

	app.route('/log/action')
		.get(isAuthenticated, log.log_api002)
		.post(isAuthenticated, log.log_api001)
		.put(isAuthenticated, log.log_api003);

	app.route('/log')
		.get(isAuthenticated, log.log_api004);
	app.route('/log/:page')
		.get(isAuthenticated, log.log_api004);


	app.route('/auditor/action')
		.get(isAuthenticated, auditor.auditor_api002)
		.post(isAuthenticated, auditor.auditor_api001)
		.put(isAuthenticated, auditor.auditor_api003);

	app.route('/auditor')
		.get(isAuthenticated, auditor.auditor_api004);

	app.route('/logistic/action')
		.get(isAuthenticated, logistic.logistic_api002)
		.post(isAuthenticated, logistic.logistic_api001)
		.put(isAuthenticated, logistic.logistic_api003);

	app.route('/logistic')
		.get(isAuthenticated, logistic.logistic_api004);

	app.route('/audit-action/action')
		.get(isAuthenticated, action.action_api002)
		.post(isAuthenticated, action.action_api001)
		.put(isAuthenticated, action.action_api003);

	app.route('/audit-action')
		.get(isAuthenticated, action.action_api004);

	app.route('/loadajax/:action')
		.post(loadajax.get_ajax);
	
	app.route('/general-log')
		.get(isAuthenticated, generalLog.general_log_api001)
		.post(isAuthenticated, generalLog.general_log_api002);
}

var isAuthenticated = function (req, res, next) {
	if (req.isAuthenticated())
	  return next();
	res.redirect('/login');
  }
