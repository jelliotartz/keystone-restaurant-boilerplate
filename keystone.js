require('dotenv').load();

var keystone = require('keystone');
var handlebars = require('express-handlebars');

function convertToSlug(Text) {
  return Text
      .toLowerCase()
      .replace(/[^\w ]+/g,'')
      .replace(/ +/g,'-')
}

function handleMongo (name, env, mongoUri)  {
  if (mongoUri) return mongoUri

  if (env === 'production') {
    return 'mongodb://localhost:27017/app'
  } else {
    return 'mongodb://localhost:27017/' + convertToSlug(name)
  }
}

var envConfig = {
  name: process.env.KEYSTONE_NAME,
  brand: process.env.KEYSTONE_BRAND,
  'cookie secret': process.env.COOKIE_SECRET,
  'session store': process.env.NODE_ENV === 'production' ? 'mongo' : null,
  'mongo': handleMongo(
    process.env.KEYSTONE_NAME,
    process.env.NODE_ENV,
    process.env.MONGODB_URI
  ),
  'ga property': process.env.GA_PROPERTY,
  'ga domain': process.env.GA_DOMAIN,
  'google api key': process.env.GOOGLE_BROWSER_KEY,
  'google server api key': process.env.GOOGLE_SERVER_KEY,
  'cloudinary config': process.env.CLOUDINARY_URL,
  'embedly api key': process.env.EMBEDLY_API_KEY,
  'mandrill api key': process.env.MANDRILL_API_KEY,
  'mandrill username': process.env.MANDRILL_USERNAME
}

var keystoneConfig = {
	'sass': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'hbs',
    'cloudinary folders': true,

	'custom engine': handlebars.create({
		layoutsDir: 'templates/views/layouts',
		partialsDir: 'templates/views/partials',
		defaultLayout: 'default',
		helpers: new require('./templates/views/helpers')(),
		extname: '.hbs'
	}).engine,

	'emails': 'templates/emails',
	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User'
}

keystone.init(Object.assign({}, keystoneConfig, envConfig))
keystone.import('models');

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

// Load your project's Routes

keystone.set('routes', require('./routes'));


keystone.set('nav', {
    outreach: [
      'enquiries',
      'press-links',
      'upcoming-events',
    ],
    site: [
      'menus',
      'galleries'
    ],
    config: [
      'configurations',
      'day-hours',
      'nav-links',
      'social-media-links'
    ],
	'hr': 'users'
});

keystone.start();
