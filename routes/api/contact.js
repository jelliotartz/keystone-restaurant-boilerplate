var keystone = require('keystone'),
	Enquiry = keystone.list('Enquiry');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	var newEnquiry = new Enquiry.model(),
		updater = newEnquiry.getUpdateHandler(req);

	updater.process(req.body, {
			fields: 'name, email, phone, company, date, startTime, endTime, eventType, numGuests, notes'
	}, function (err) {
		if (err) {
			res.status(500).json({errors: err.errors})
		} else {
			res.status(200).json({data: 'success'})
		}
	});
};
