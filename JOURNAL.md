# Documenting my journey

## Initialise project, identify required routes and add folder structure indicated in readme. Set up config

**Date:** 19/12/2021

I have so far added a README.md file which documents my learning outcomes, scripts to use, file structure and how I will approach the project.

### Initial Set Up

The project has been created using `create-react-app` and the `redux template`.

I have established all required routes I should need within the app.

### Git commits

I have found an article on Medium which details ideal commit messages - [Writing Meaningful Git Commit Messages](https://medium.com/@menuka/writing-meaningful-git-commit-messages-a62756b65c81)

The article was written in 2017 but I don't see why it wouldn't still be good practice.

### Identifying required routes

As this is an e-commerce website, all of the routes are pretty standard. The website is not going to be used commercially so no GDPR related routes will be set up.

**Routes**

_Public Routes_

```
home: `/`
all products: `/shop`
departments: `/shop/:department-name`*
single Product: `/shop/:product-id`
search results: `/search/:term`
cart: `/cart`
checkout: `/checkout`
sign up: `/sign-up`
sign in: `/sign-in`
```

_Private Routes_

```
account: `/account`
wishlist: `/account/wishlist`
orders: `/account/orders`
settings: `/account/settings`
```

_\*department names will be saved in firestore as the document id, since user does not control these names, there should be no casing issues when using Firebase queries_

> Completed: 19/12/2021

---

## Design Home Page

**Date:** 20/12/2021

A home page was designed using Figma. Mockup image can be found in assets folder.

> Completed 21/12/2021

---

## Create Home route and build home page foundation

**Date:** 21/12/2021

Today I will build the home page. I will use placeholders for now for the products. I will need to implement React Slick as I'd like the featured releases to reside in a carousel.

> Completed 22/12/2021

---

## Create Fake JSON data for albums

**Date:** 22/12/2021

> Completed 22/12/2021

---

## Update products JSON, fetch and store in state + render to productsList components

**Date:** 22/12/2021

- Add an ID to each product in the JSON
- Fetch products from JSON and store in Redux state
- Render products from state in to product list components

> Completed 23/12/2021

## Create a shop page, create logic to render pre-order items based on date and add firebase auth to the project

**Date:** 24/12/2021

I need to create the shop page to display all projects. For the pre-order carousel on the home page I will need to set up some logic to only render those which have the date ahead of current date. If there are no products with a future release date then I will not render the component.

I am going to start adding firebase to the project and a simple reducer to store the user uid and email for now. Later I will want to implement Thunks to call when signing in, creating a user etc. Then I will need to store user data in Firebase also. When the user creates an account I will want it to create user via firebase auth and add some default user details to firebase firestore.

In the app's useEffect I will then dispatch an action within the subscription function to get the current user details from Firebase based on the UID and store in the state.

_Note:_ on create user, once everything is fulfilled I will navigate back to previous page user was on.

> Completed 27/12/2021
> Also implemented redux + Sign in authentication

## Sign up page, Cart

**Date:** 27/12/2021

- Create sign up page and form - done 29/12/2021
- Integrate sign up with firebase firestore - done 29/12/2021
- Create Cart component rendering the CartList and the checkout button - done 29/12/2021
- Create CartItem component - done 29/12/2021
- Create CartList component which renders the CartItems - done 29/12/2021
- Create CartTotal component to show price and checkout button - done 29/12/2021
- Implement addToCart, RemoveFromCart and QuantityControl functions with Redux - Partly done 29/12/2021
- Create CartPreview component which will be displayed when a new item is added to cart OR create a modal which pops up to say the item has been added and gives option to continue or go to cart (or straight to checkout?) - done 31/12/2021
- Add cart items to localStorage - done 30/12/2021

> Completed 31/12/2021

## Cart Preview for mobile, cart quantity indicator in navbar on cart icon, cart preview to persist until user clicks outside or clicks close

**Date:** 31/12/2021

> Completed 02/12/2021

## User accounts and Wishlist

**Date:** 01/01/2022

## Implement Typescript

**Date:** 03/01/2022

(partially complete)

- Add wish list features once user accounts are in place (users will need to be stored in firebase to associate a wish list with their account)
- Show a user drop down in the navbar which has links for account, settings, wishlist and sign out. Also add a wish list icon to the main nav next to search and basket.

## Messy Notes

Think about where the user will want to go after signing up.

On check out do we ask them if they want to sign up?

If so, re-direct them back to check out once signed up and fill address with their details

We will need to display a button to set a different address for the order.

If they want to check out as a guest we will ask for their details but won't save them. If they have an account the details will be saved in Firestore

Generate order number with each order

Users will need email notifications that order has been completed. Also after stripe payment we will need to re-direct back, show the order number and a breakdown of the order from Firestore.

How long do we store the cart? Do we save it in local storage for 1 day? 30 minutes? Most likely 30 minutes because what if the item goes out of stock / is removed.

When an item is removed, do we tell the customer via email? How do we implement this?
