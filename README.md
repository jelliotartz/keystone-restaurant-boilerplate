# Restaurant Single Page Template

The site will look similar to RPM Restaurants except it will live all on one page
[http://rpmrestaurants.com/](http://rpmrestaurants.com/)

General Requirements:
- Each section will have a different, full screen page background
- Mobile / tablet support, but this should be easy with Bootstrap. There might be some font sizes that need to be adjusted on smaller resolutions
- Buttons will have a white border, transparent background and white text
- Text will be white and use `Open Sans` by Google [Google Fonts](http://google.com/fonts)

### Template Structure
- Hero Image - `HeroImage` (section)
  - full page image background - `HeroImage-bg`
  - slightly black tinted background
  - absolutely centered logo - `HeroImage-logo` (div)
  - subtle down arrow - `HeroImage-downArrow` (span)
  - Contact Information `HeroImage-contact`
    - 112 W. Hubbard St • Chicago, IL 60654 • 312-995-0339
- Navigation - `Navigation` (nav)
  - centered at the top of the hero image, white text
  - RESERVE | MENU | PRIVATE PARTIES | CONTACT
    - `Navigation-container` (ul)
    - `Navigation-item` (li)
    - `Navigation-link` (a)
    - white link, no text-decoration
      - on hover, underline / bold
- About Us - `AboutUs` (section)
  - Left Hand Side `row` -> `col-sm-6`
    - header `Section-header` (h2)
      - About Us
    - paragraph `Section-lead` (p)
  - Right Hand Side `col-sm-6`
    - header `Section-header` (h2)
      - Hours
    - list of hours (Monday -> 6pm)
      - `Section-lead` (p)
- Menu - `Menu` (section)
  - full page image background - `Section-bg Section-bg--menu`
  - List of Menus - `MenuNavigation` (div)
    - I will provide PDF's later this week
  - Hor D'Ourves
  - Interactive Stations
  - Pre-Fixe Dinner
  - Food Stations
  - `MenuNavigation-container` (ul)
  - `MenuNavigation-item` (li)
  - `MenuNavigation-link` (a)
  - white link, no text-decoration
    - on hover, underline / bold
- Private Events `PrivateEvents` (section)
  - full page image background - `Section-bg Section-bg--private-events`
  - Left Hand Side `row` -> `col-sm-6`
    - header `Section-header` (h2)
      - Private Parties
    - small description `Section-lead` (p)
    - button `Section-button` (a)
  - Right Hand Side `col-sm-6`
    - header `Section-header` (h2)
      - Inquire
    - form `Form` (bootstrap form default)
      - First & last name (text, required) `form-control`
      - Email address (email, required) `form-control`
      - phone # (text) `form-control`
      - company (text) `form-control`
      - date (date, required) `form-control`
      - start time (text, required) `form-control`
      - end time (text, required) `form-control`
      - event type (select) `form-control`
      - number of guests (text, required) `form-control`
      - additional notes (textarea) `form-control`
      - Inquire `Section-button` (button) `form-control`
 - Upcoming Events `UpcomingEvents` (section)
  - Grid of photos (3 per row) `row` -> `col-sm-4` OR a list (li)
  - event name `Event-name` (span)
  - photo `Event-image` (img)

# Backend

## Installing NVM

NVM - Node Version Manager. Similar to RBENV or RVM for Ruby.

[https://github.com/creationix/nvm](https://github.com/creationix/nvm)

Run the following in terminal. It will install `nvm` and load it into your `bash/zshrc` file.

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash

```

Close your terminal window and re-open it, you should now be able to type `nvm`.

You can confirm the proper installation of `nvm` by typing:

```bash
type -a nvm
```

If something besides `not found` appears, you've installed it correctly! Move on to step 2


## Installing Node

Within the project directory, type `nvm install`. There's a file called `.nvmrc` that knows which correct version to install. In this case, it'll be something in the `5` range.

You can confirm this worked by typing: `node -v` and something within the v5 range should appear.


## Installing Node Modules

Similar to install Ruby Gems

`npm install`


## Environment Variables

When you want to deploy to numerous environments, you use environment variables. This is nice because if you're building an e-commerce platform for example, you probably don't want to play with real data so you make a test account.

Instead of fumbling around and making sure you've got the right keys set up, you can use a `.env` file to load those keys for you automagically. See `dotenv` on Google / Github.

Create a `.env` file and paste the following:

```bash
COOKIE_SECRET=f590092a5e57c127d28cc71d3158e490a01d07bcffe65ac2f61dc054877442a8b60fdb7b814ccb57b87b6b766c800edf1e63e264a269f5484b4a598c5bc65f4a
CLOUDINARY_URL=cloudinary://333779167276662:_8jbSi9FB3sWYrfimcl8VKh34rI@keystone-demo
MANDRILL_API_KEY=NY8RRKyv1Bure9bdP8-TOQ
```


## Starting the project

`npm start` from the root directory

It will start a node server on `localhost:3000`. You can open up Chrome and navigate to see the starter project.

You can login to the project: [http://localhost:3000/keystone](http://localhost:3000/keystone)

Username: user@keystonejs.com
Password: admin

## Project Structure

### Front End

- Templates
  - Emails
  - Views
    - helpers
    - layouts
      - we'll only need one layout (default.hbs)
    - partials
      - we can split up different sections of the site into partials:
        - `homepage-carousel-partial`
        - `homepage-gallery-partial`
        - `event-page-calendar-partial`, etc.
- Public
  - fonts
  - images
  - js
  - styles

### Back end

- Models
  - models make up what you'll see on the backend
- Routes
- Updates
  - bootstrap the server

# Edits 04/24/16

- Navigation
  - tablet/desktop - add ~60px margin top
  - mobile - more padding around the navicon (5px top and bottom)
  - mobile - sticky navigation (so it always appears, I can help you with this as well)
- Down Arrow
  - let's move this under the address and make it 60px from the bottom (same distance as nav)
- Address
  - let's make this around 30px above the down arrow

- Each Section (about us, contact, etc)
  - add top and bottom padding. Let's try 80px tablet/desktop, 30px mobile
  - `mobile` add a top or bottom margin to each row on mobile so there's space between them, let's try 40px for now. You can add a helper method css class like `mobile-margin` or something

- Each Section Headline (about us, hours, etc)
  - add 5px bottom padding
  - add 10px bottom margin
  - make the headline `display: inline-block` and add 20px left/right padding so the border doesn't span the full width

- Menu
  - section height doesn't need to be 800px because there's less items, let's make it 600px
  - a (link) - increase font size, try 26px, add 4px top/bottom padding
  - a (link) - increase line height (try 1.6, no unit of measure needed)
  - `MenuCenter` increase width to 300px.
  - try this to center:
    - `left: 0, right: 0, margin: auto, width: 300px`

- Private Parties / Enquire
  - random checkbox on the left side under private parties text
  - add a `CATERING MENU` button that spans the full width of Private Parties
  - make that `Inquire` button the full width
  - add basic form validation methods
    - see `Form` section of `Template Structure` (alot of these are missing required)

- Upcoming Events
  - `mobile` this is stacked on top of the private events section
  - make it look like every other section with the background and padding
  - you can use the `Figure` class to be `html5 compliant`:

```html
  <figure class='Event'>
    <img class='Event-image' src='xyz.com' alt='Upcoming Event' />
    <figcaption class='Event-caption'>
      <span class='Event-name'>Event Name</span>
      <span class='Event-details'>Event Details Go here Lorem ipsum text</span>
    </figcaption>
  </figure>
```

# Updates 04/28/16

- General
  - for some reason on mobile, you can scroll left/right a little bit.
- Hero (mobile / iphone 5/6)
  - any chance we can get the contact information to show up on one line for these smaller views?
- Menu (mobile)
  - There's no top/bottom padding
  - this doesn't need such a tall height especially if there's only a few menus. Can `300px` on mobile?

If you switch `<section class="Menu">` to `<section class="Section Menu">` you can add a global section class to handling styling for ALL the sections:

```css
.Section {
  padding-top: 60px;
  padding-bottom: 60px;

  // ... mobile, etc
}
```
