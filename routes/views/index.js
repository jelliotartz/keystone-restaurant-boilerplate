var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	view.query('hours', keystone.list('DayHour').model.find().sort('sortOrder'));
	view.query('menus', keystone.list('Menu').model.find().sort('sortOrder'));
  view.query('photoGalleries', keystone.list('Gallery').model.findOne());

	locals.section = 'home';

	// Render the view
	view.render('index');
};
