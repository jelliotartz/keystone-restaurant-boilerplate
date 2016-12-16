var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Enquiry Model
 * =============
 */

var Enquiry = new keystone.List('Enquiry', {
	nocreate: true,
  noedit: true,
});

Enquiry.add({
	name: { type: String, required: true },
	email: { type: Types.Email, required: true },
	phone: { type: String },
	company: { type: String },
    notes: { type: String },
	date: {
		type: String,
		required: true
	},
	startTime: { type: String, required: true },
	endTime: { type: String, required: true },
	eventType: { type: Types.Select, options: [
		{ value: 'seated-dinner', label: 'Seated Dinner' },
		{ value: 'reception', label: 'Reception' },
		{ value: 'private', label: 'Private' },
		{ value: 'rooftop', label: 'Rooftop' }
	] },
	numGuests: {type: Number, required: true},
	notes: { type: Types.Textarea },
	createdAt: { type: Date, default: Date.now }
});

Enquiry.schema.pre('save', function(next) {
	this.wasNew = this.isNew;
	next();
});

Enquiry.schema.post('save', function() {
	if (this.wasNew) {
		this.sendNotificationEmail();
	}
});

Enquiry.schema.methods.sendNotificationEmail = function(callback) {

	if ('function' !== typeof callback) {
		callback = function() {};
	}

	var enquiry = this;

	keystone.list('User').model.find().where('isAdmin', true).exec(function(err, admins) {

		if (err) return callback(err);

        const NAME = process.env.KEYSTONE_NAME
        const eventsManager = `$events@${process.env.KEYSTONE_DOMAIN}`
        const subject = `${NAME} Enquiry`

		new keystone.Email({
         templateExt: 'hbs',
  		 templateEngine: require('handlebars'),
  		 templateName: 'enquiry-notification'
		}).send({
			to: eventsManager,
			from: {
                name: `${NAME} CRM`,
				email: enquiry.email
			},
			subject: subject,
			enquiry: enquiry
		}, callback);
	});
};

Enquiry.defaultSort = '-createdAt';
Enquiry.defaultColumns = 'name, email, phone, company, date, startTime, endTime, eventType, numGuests, notes, createdAt';
Enquiry.register();
