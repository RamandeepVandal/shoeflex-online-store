# ShoeFlex - Front-end E-commerce Shoe Store App

ShoeFlex is a front-end e-commerce shoe store application that allows users to browse an catalog of shoes and add items to their cart. 

## Features

- Browse a wide variety of shoes in the catalog
- View information about each shoe, including name, price, and image
- Add items to the cart for future purchase
- Interactive cart functionality, including updating quantities and removing items
- Responsive design for optimal viewing on different devices

## Installation

1. In the root directory, run **npm install**.
2. Now in the server directory (cd server), run **npm install**.
4. In the server directory, navigate to config and add your MongoDB connection uri in the db.js file. 
3. In the server direcotry, run **npm start** to start the server and connection to the db.
4. Open a second terminal and in the root directory, run **npm run dev** to start the application.

## Usage

- Browse the shoe catalog: On the home page, you will see a list of available shoes. Scroll through the catalog to find the shoes you're interested in.
- View shoe details: Click on a shoe to view more information, including the name, description, price, and images.
- Add items to the cart: When viewing a shoe, click the "Add to Cart" button to add it to your cart.
- View and manage the cart: Click on the cart icon in the navigation bar to view your cart. Here, you can update quantities, remove items, and proceed to checkout.

## Acknowledgements
- [Nike](https://Nike.com/) - Source of high-quality images for shoe catalog

## TODO

1. Add authentication for user accounts.
2. Make the cart unique for each user account.
3. Utilize the Stripe API to add a checkout feature. 
