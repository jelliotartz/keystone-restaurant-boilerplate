var keystone = require('keystone'),
	Types = keystone.Field.Types,
	Menu;

Menu = new keystone.List('Menu', {
	map: {
		name: 'name'
	},
	autokey: {
		path: 'slug',
		from: 'name',
		unique: true,
	},
	sortable: true,
	track: true,
});

function convertToSlug(Text) {
	return Text.toLowerCase().replace(/[^\w ]+/g, '').replace(/ +/g, '-')
}

const folderName = convertToSlug(process.env.KEYSTONE_NAME)

Menu.add({
	name: {
		type: String,
		initial: true,
	},
	pdf: {
		type: Types.CloudinaryImage,
		autoCleanup: true,
		select: true,
		selectPrefix: `${folderName}/menus`,
		folder: `${folderName}/menus`,
	},
	image: {
		type: Types.CloudinaryImage,
		autoCleanup: true,
		select: true,
		selectPrefix: `${folderName}/menus`,
		folder: `${folderName}/menus`,
	},
	state: {
		type: Types.Select,
		options: 'published, hidden',
		default: 'published',
	},
});

Menu.register();
