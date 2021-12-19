# Aural

## A music related e-commerce website built with React JS and Redux

As I now have 18 days of no work due to Christmas Holidays I have decided to build an e-commerce app

### [Live Demo](#) - Coming Soon

## Expected Outcome:

A fully functional ecommerce application with user authentication, database (products, customers, orders), basket + checkout with Stripe payments (add to basket + buy now), private routes for customer account and orders list.

## Expected Learning Outcomes:

Using this project, I intend to learn how to use Redux and Testing libraries. I will also use the project to increase my knowledge with Firebase services.

I also hope to pick up more useful information on database structure. With my previous project [Block. Social Media](https://github.com/joejcox/Block) I came to a some issues with structure - this time I would like to try out a new structure to gain a more rounded experience.

During the build of this project I intend to develop a habit of outlining a project, its core tools, components and design before I even begin to code. I feel like this will provide a more enjoyable experience.

#### Commiting

Another aim is to focus on smaller commits, and providing shorter, but descriptive commit messages along with prefixes such as `build`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `style` and `test`.

## Tech used

[React](https://reactjs.org/) - JavaScript Library | Create React App (redux template)

[Redux](https://redux.js.org/) - State management

[Redux-Toolkit](https://redux.js.org/introduction/getting-started) - Simplifying Redux with utilities

[React Router Dom v6](https://reactrouter.com) - Routing

[React Hook Form](https://react-hook-form.com) - Form validation

[Firebase v9](https://firebase.google.com/) - Database, authentication and file storage

[TailwindCSS v3](https://tailwindcss.com/docs/installation) - Styling

[Craco](https://github.com/gsoft-inc/craco) - Create React App Config Override

[HeroIcons](https://github.com/tailwindlabs/heroicons#react) - Icons

[Snipcart](https://snipcart.com) - Cart

[React Hot Toast](https://react-hot-toast.com) - Toast notifications

[React Inner Image Zoom](https://github.com/laurenashpole/react-inner-image-zoom) - product image zoom

[Emailjs](https://www.emailjs.com) - contact form, order notifications

[React Slick](https://react-slick.neostack.com) - Product feed carousels

[Stripe](https://stripe.com/docs/development) - Checkout and payment

[React Helmet Async](https://github.com/staylor/react-helmet-async) - Page titles and metadata

[Jest](https://jestjs.io/) - Test runner

[React Testing Library](https://testing-library.com/docs/react-testing-library/example-intro/) - Component tests

[Webpack](https://webpack.js.org/) - Bundler

[Babel](https://babeljs.io/) - JavaScript Compiler

[PostCSS](https://postcss.org/) - CSS Compiler

[Autoprefixer](https://github.com/postcss/autoprefixer) - Vendor prefixes

[Figma](https://www.figma.com/) - Website Mock up

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

---

## Project Approach

I will use Figma to design a mock up of the over all website and components. I will take design inspiration from [this website](https://www.websitebuilderexpert.com/designing-websites/free-ecommerce-website-templates/)

Once the mock up is complete I will look at identifying routes required, followed by core components and then any other components I require i.e. page components for each route.

The project will then be initialised using `npx create-react-app aural --template redux`

### What products will be available on the website?

The website will provide products related to music - vinyl records, CDs, tote bags and band/artist t-shirts.

## Components

I will use functional components with hooks for this project.

### File structure

```
app.jsx
index.jsx
assets/
  styles/
  images/
constants/
  index.js
  types.js
  routes.js
core/
  CoreComponent/
    index.jsx
    index.test.jsx
components/
  smart/
    SmartComponent/
      index.jsx
      index.test.jsx
  dumb/
    DumbComponent/
      index.jsx
      index.test.jsx
pages/
  page/
    index.jsx
    index.test.jsx
redux/
  store.js
hooks/
  useHook.js
helpers/
  utils.js
services/
  firebase.js

```

### DB Structure

#### What collections do I need?

- customers
- products
- orders

_Note: To begin with (v1) I will not be using stock control_

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
