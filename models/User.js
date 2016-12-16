var keystone = require('keystone'),
	Types = keystone.Field.Types;

var User = new keystone.List('User', {
  autokey: { path: 'key', from: 'name', unique: true },
	track: true,
	sortable: true
});

User.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true }
}, 'Profile', {
	title: {
		type: String,
		initial: true,
		width: 'short'
	},
	linkedIn: {
		type: Types.Url,
		initial: true,
		width: 'short'
	},
	twitter: {
		type: Types.Url,
		initial: true,
		width: 'short'
	},
	office: {
		type: String,
		initial: true,
		width: 'short'
	},
	mobile: {
		type: String,
		initial: true,
		width: 'short'
	},
	email: {
		type: Types.Email,
		initial: true,
		width: 'short'
	},
	bio: {
		type: Types.Html,
		wysiwyg: true,
		height: 200
	}
}, 'Images', {
	image: {
    type: Types.CloudinaryImage,
    autoCleanup: true,
    select: true,
    publicID: 'slug',
    selectPrefix: 'professionals',
    folder: 'professionals'
	}
}, 'Permissions', {
  isAdmin: { type: Boolean, label: 'Can access Keystone' },
  isEmployee: { type: Boolean, label: 'Is an Employee' }
});

User.schema.virtual('canAccessKeystone').get(function() {
	return this.isAdmin;
});

User.defaultColumns = 'name, email, isAdmin, isEmployee';
User.register();
