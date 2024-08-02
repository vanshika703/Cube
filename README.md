## Customer Details Portal
## Overview
This project is a single-page application (SPA) built with React and TypeScript that displays a customer details portal. The portal features a list of customers on the left side and shows detailed information about the selected customer on the right side. The application supports infinite scrolling for the customer list and dynamically updates a grid of photos every 10 seconds using a public API.

## Features
Customer List: Displays a list of up to 1000 customers on the left side.

Each card in the list shows the customer's name and title.
Clicking on a card shows detailed information about the selected customer on the right side.
The selected card is highlighted.

Customer Details: Shows detailed information about the selected customer on the right side.

Includes the customer's name, title, address, and a 3x3 grid of 9 photos.
The photos in the grid change every 10 seconds. (The API has a rate limit)
Infinite Scrolling: The customer list supports infinite scrolling, loading more customers as the user scrolls down.

![image](https://github.com/user-attachments/assets/cf55823f-25f6-4262-b72a-4d19753f7f37)

![image](https://github.com/user-attachments/assets/f1fe749b-ae70-4444-b6b3-1fea08505899)


Tech Stack
React: For building the user interface.
TypeScript: For type safety and better developer experience.
HTML: For structuring the content.
TailwindCSS: For styling the application.
Random User API: To fetch random user data.
Picsum Photos API: To fetch random photos.

## Components
MainBody
The main container component that manages the state of the users and the selected user. It handles the initial fetch of users and subsequent fetches .

CustomerSidebar
Displays the list of customers and handles infinite scrolling using the IntersectionObserver API.

CustomerDetails
Displays detailed information about the selected customer and fetches a new set of random photos every 10 seconds.

## API Usage
Random User API: Used to fetch random user data.
Endpoint: https://randomuser.me/api/?results=10
Picsum Photos API: Used to fetch random photos for the customer details.
Endpoint: https://picsum.photos/800/600?random=${Math.floor(Math.random() * 1000)}


##Best Practices Followed
Component-Based Architecture: The application is broken down into reusable components.
TypeScript: Used for type safety and better developer experience - User type to define the User.
React Hooks: Utilized for state management and side effects - useEffect and useState.
TailwinfCSSCSS: Modular and scoped styling for each component. Minimal style maintained.
Error Handling: Proper error handling for API requests.
Infinite Scrolling: Implemented using the IntersectionObserver API


## Installation and Setup

Clone the Repository:
git clone https://github.com/your-username/customer-details-portal.git
cd my-app


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
