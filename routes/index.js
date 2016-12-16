var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.bootstrap);
keystone.pre('routes', middleware.navLinks);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views : importRoutes('./views'),
	api   : importRoutes('./api')
};

// Setup Route Bindings
exports = module.exports = function(app) {

	// Views
	app.get('/', routes.views.index);
	app.get('/gallery', routes.views.gallery);
	app.all('/contact', routes.views.contact);
	app.get('/catering', routes.views.catering);
	app.post('/api/contact', routes.api.contact);

};
