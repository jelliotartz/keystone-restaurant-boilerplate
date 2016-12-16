var keystone = require('keystone'),
	Types = keystone.Field.Types,
	NavLink;

NavLink = new keystone.List('NavLink', {
	map: {
		name: 'label'
	},
	autokey: {
		path: 'slug',
		from: 'label',
		unique: true
	},
	sortable: true,
	track: true
});

NavLink.add({
	label: {
		type: String,
		initial: true
	},
	url: {
		type: String,
		initial: true
	},
	state: {
		type: Types.Select,
		options: 'published, hidden',
		default: 'published'
	}
});

NavLink.register();
