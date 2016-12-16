var keystone = require('keystone'),
	Types = keystone.Field.Types,
	PressLink;

PressLink = new keystone.List('PressLink', {
	map: {
		name: 'author'
	},
	autokey: {
		path: 'slug',
		from: 'author',
		unique: true
	},
	sortable: true,
	track: true
});

PressLink.add({
  author: {
		type: String
  },
	review: {
    type: Types.Textarea,
    height: 100
	},
	url: {
		type: Types.Url,
		initial: true
	}
});

PressLink.register();
