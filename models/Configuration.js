var keystone = require('keystone'),
	Types = keystone.Field.Types,
	Configuration;

Configuration = new keystone.List('Configuration', {
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

Configuration.add({
	name: {
		type: String,
		initial: true,
		required: true
	},
	url: {
		type: Types.Url,
		initial: true
	},
	address: {
		type: Types.Location,
		defaults: {
			country: 'US'
		}
	},
	phone: {
		type: String,
		initial: true
	},
	email: {
		type: Types.Email,
		initial: true
	},
  mailchimpUrl: {
    type: String
  },
  googleAnalyticsId: {
    type: String
  },
  experienceHeader: {
    type: String
  },
  experienceVideoUrl: {
    type: String
  },
}, 'Hero', {
	logo: {
      type: Types.CloudinaryImage,
      publicID: 'slug',
      autoCleanup: true,
      select: true,
      selectPrefix: `${folderName}/logos`,
      folder: `${folderName}/logos`
	},
	heroImage: {
		type: Types.CloudinaryImage,
		autoCleanup: true,
		select: true,
    selectPrefix: `${folderName}/backgrounds`,
    folder: `${folderName}/backgrounds`
	}
}, 'Menu', {
	menuHeader: {
		type: String
	},
	menuText: {
		type: Types.Textarea,
		height: 50
	},
	menuImage: {
		type: Types.CloudinaryImage,
		autoCleanup: true,
		select: true,
		selectPrefix: `${folderName}/backgrounds`,
		folder: `${folderName}/backgrounds`
	}
}, 'About Us', {
	aboutUsHeader: {
		type: String
	},
	aboutUsText: {
		type: Types.Textarea,
		height: 50
	},
	aboutUsImage: {
		type: Types.CloudinaryImage,
		autoCleanup: true,
		select: true,
		selectPrefix: `${folderName}/backgrounds`,
		folder: `${folderName}/backgrounds`
	}
}, 'Gallery', {
  galleryHeader: {
    type: String
  },
  galleryText: {
		type: Types.Textarea,
		height: 50
  },
	galleryImage: {
		type: Types.CloudinaryImage,
		autoCleanup: true,
		select: true,
        selectPrefix: `${folderName}/backgrounds`,
        folder: `${folderName}/backgrounds`
	},
}, 'Private Events', {
  privateEventsHeader: {
    type: String
  },
  privateEventsText: {
		type: Types.Textarea,
		height: 50
  },
	privateEventsImage: {
		type: Types.CloudinaryImage,
		autoCleanup: true,
		select: true,
        selectPrefix: `${folderName}/backgrounds`,
        folder: `${folderName}/backgrounds`
	}
}, 'Mailing List', {
  mailingListHeader: {
    type: String
  },
  mailingListText: {
		type: Types.Textarea,
		height: 50
  },
	mailingListImage: {
		type: Types.CloudinaryImage,
		autoCleanup: true,
		select: true,
    selectPrefix: `${folderName}/backgrounds`,
    folder: `${folderName}/backgrounds`
	},
});

Configuration.register();
