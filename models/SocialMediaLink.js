var keystone = require('keystone'),
	Types = keystone.Field.Types,
	SocialMediaLink;

SocialMediaLink = new keystone.List('SocialMediaLink', {
	map: {
		name: 'network'
	},
	autokey: {
		path: 'slug',
		from: 'network',
		unique: true
	},
	sortable: true,
	track: true
});

SocialMediaLink.add({
  network: {
    type: Types.Select,
    required: true,
    emptyOption: false,
    options: 'Facebook, Twitter, Yelp, Snapchat, Foursquare, Opentable'
  },
	label: {
		type: String
	},
	url: {
		type: Types.Url,
		initial: true
	}
});

SocialMediaLink.register();
