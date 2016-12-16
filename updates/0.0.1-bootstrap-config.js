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
      {
        label: 'Order Online',
        url: '' // https://www.grubhub.com/restaurant/barn-and-company-950-w-wrightwood-ave-chicago/298103
      },
      {
        label: 'Reserve a table',
        url: '' // http://www.opentable.com/barn-and-company-reservations-chicago?restref=115276
      }
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
        email: '', // events@barnandcompany.com
        menuHeader: '', // Menu
        aboutUsHeader: '', // About Us
        galleryHeader: '', // Gallery
        experienceVideoUrl: '', // https://www.youtube.com/embed/UA6tdrdXeOg
        privateEventsHeader: '', // Private Events
        privateEventsText: 'lorem ipsum...',
        mailingListHeader: 'lorem ipsum...',
        mailingListText: 'lorem ipsum...',
        mailchimpUrl: '', // https://BarnandCompany.us8.list-manage.com/subscribe/post?u=c92a0ed74771bd546c02471bb&amp;id=2db31091e6
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
