var keystone = require('keystone'),
	Types = keystone.Field.Types,
	DayHour;

DayHour = new keystone.List('DayHour', {
	map: {
		name: 'dayOfWeek'
	},
	autokey: {
		path: 'slug',
		from: 'dayOfWeek',
		unique: true
	},
	sortable: true,
	track: true
});

DayHour.add({
	dayOfWeek: {
		type: String,
		initial: true
	},
	open: {
		type: String,
		initial: true
	},
	close: {
		type: String,
		initial: true
	},
	state: {
		type: Types.Select,
		options: 'published, hidden',
		default: 'published'
	}
});

DayHour.register();
