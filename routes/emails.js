var keystone = require('keystone');

module.exports = {
	
	/** New Enquiry Notifications */
	
	'enquiry-notification': function(req, res, callback) {
		
		// To test enquiry notifications we create a dummy enquiry that
		// is not saved to the database, but passed to the template.
		
		var Enquiry = keystone.list('Enquiry');
		
		var newEnquiry = new Enquiry.model({
			name: { first: 'Test', last: 'User' },
			email: `contact@${process.env.KEYSTONE_DOMAIN}`,
			phone: '+61 2 1234 5678',
			enquiryType: 'message',
			message: { md: 'Nice enquiry notification.' }
		});
		
		callback(null, {
			admin: 'Admin User',
			enquiry: newEnquiry,
			enquiry_url: '/keystone/enquiries/'
		});
		
	}
	
};
