var keystone = require('keystone'),
	Types = keystone.Field.Types,
	UpcomingEvent;

UpcomingEvent = new keystone.List('UpcomingEvent', {
	label: "Upcoming Event",
	map: {
		name: 'name'
	},
	autokey: {
		path: 'slug',
		from: 'name',
		unique: true
	},
	sortable: true,
	track: true
});

function convertToSlug(Text) {
  return Text
      .toLowerCase()
      .replace(/[^\w ]+/g,'')
      .replace(/ +/g,'-')
}

const folderName = convertToSlug(process.env.KEYSTONE_NAME)

UpcomingEvent.add({
	name: {
		type: String,
		required: true,
		unique: true,
		initial: true,
		index: true
	},
	image: {
      type: Types.CloudinaryImage,
      autoCleanup: true,
      publicID: 'slug',
      select: true,
      selectPrefix: `${folderName}/events`,
      folder: `${folderName}/events`
	},
	link: {
		type: Types.Url,
		initial: true
	},
	state: {
		type: Types.Select,
		options: 'published, hidden',
		default: 'published',
		index: true
	},
	publishedDate: {
		type: Types.Date,
		index: true,
		dependsOn: { state: 'published' }
	}
});

UpcomingEvent.schema.methods.isPublished = function () {
	return this.state == 'published';
}

UpcomingEvent.schema.pre('save', function (next) {
	if (this.isModified('state') && this.isPublished() && !this.publishedDate) {
		this.publishedDate = new Date();
	}

	next();
})

UpcomingEvent.defaultColumns = 'name|10%, link|20%, state|20%, publishedDate|20%';
UpcomingEvent.register();
