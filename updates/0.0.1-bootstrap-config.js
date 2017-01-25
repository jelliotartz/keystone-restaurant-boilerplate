exports.create = {
    NavLink: [
      {
        label: 'Menu',
        url: '#menu'
      },
      {
        label: 'Gallery',
        url: '/gallery',
      },
      {
        label: '',
        url: '',
      },
      // {
      //   label: 'Catering',
      //   url: '#catering'
      // },
      // {
      //   label: 'Sponsorships',
      //   url: '/sponsorships'
      // },
    ],
    Configuration: [
      {
        name: '',
        url: '',
        address: {
          street1: '',
          suburb: '',
          state: '',
          postcode: ''
        },
        phone: '',
        email: '', //
        menuHeader: '', // Menu
        aboutUsHeader: '', // About Us
        galleryHeader: '', // Gallery
        experienceVideoUrl: '',
        privateEventsHeader: '', // Private Events
        privateEventsText: 'lorem ipsum...',
        mailingListHeader: 'lorem ipsum...',
        mailingListText: 'lorem ipsum...',
        mailchimpUrl: '',
        aboutUsText: 'lorem ipsum...'
      }
    ],
    SocialMediaLink: [
      {
        network: 'Facebook',
        label: 'Facebook',
        url: 'http://facebook.com/'
      },
      {
        network: 'Yelp',
        label: 'Yelp',
        url: 'http://yelp.com/'
      },
      {
        network: 'Twitter',
        label: 'Twitter',
        url: 'http://twitter.com/'
      }
    ],
    DayHour: [
      {
        dayOfWeek: 'Monday-Thursday',
        open: '4pm',
        close: '1230am'
      },
      {
        dayOfWeek: 'Friday',
        open: '4pm',
        close: '2am'
      },
      {
        dayOfWeek: 'Saturday',
        open: '11am',
        close: '3am'
      },
      {
        dayOfWeek: 'Sunday',
        open: '11am',
        close: '10pm'
      }
    ]
};
