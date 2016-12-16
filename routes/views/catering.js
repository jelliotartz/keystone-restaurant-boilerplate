var keystone = require('keystone');
var CateringPage = keystone.list('CateringPage');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	view.query(
		'page',
		CateringPage
		.model
		.findOne()
		.where('state', 'published')
	)

	locals.section = 'oklahoma';

	view.render('catering');
};
