var keystone = require('keystone'),
	Types = keystone.Field.Types,
	CateringPage;

CateringPage = new keystone.List('CateringPage', {
	label: 'Catering Page',
	map: {
		name: 'pageTitle'
	},
	autokey: {
		path: 'slug',
		from: 'pageTitle'
	},
	sortable: true,
	track: true
});

CateringPage.add({
	pageTitle: {
		type: String,
		required: true,
		initial: true
	},
	variation: {
		type: String,
		initial: true
	},
    introductionText: {
          type: Types.Textarea,
          initial: true,
          height: 50
    },
    generalText: {
        type: Types.Textarea,
		initial: true,
        height: 100
    },
	reservationFormTitle: {
		type: String,
		initial: true
	},
	cateringBanner: {
		type: Types.CloudinaryImage,
        autoCleanup: true,
        select: true,
        publicID: 'slug' + '-banner',
        selectPrefix: 'barn/catering-page',
        folder: 'barn/catering-page'
	},
	cateringMenu: {
		type: Types.CloudinaryImage,
        autoCleanup: true,
        select: true,
        publicID: 'slug' + '-menu',
        selectPrefix: 'barn/catering-page',
        folder: 'barn/catering-page'
	},
	state: {
		type: Types.Select,
		options: 'published, hidden',
		default: 'published'
	}
});

CateringPage.schema.methods.isPublished = function () {
	return this.state == 'published';
}

CateringPage.defaultColumns = 'variation|10%, pageTitle|20%, state|20%';
CateringPage.register();
