# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#  Property Website using React.js and Vite.js
Welcome to the Property Website project built using React.js and Vite.js. This single-page application showcases properties using data fetched from the API and provides a user-friendly interface to explore property listings.

# Property Website Preview

# Overview
This website serves as a platform to explore various property listings conveniently. The landing page of the website is designed as a single-page application with two main tabs: "Card View" and "Data Table View". Users can seamlessly switch between these tabs to view property listings in their preferred format.

# Features
1 Landing Page with Tabs: The landing page provides two tabs: "Card View" and "Data Table View". Users can click on these tabs to toggle between different views of property listings.

2 Card View: In the "Card View" tab, property listings are displayed as cards. Each card showcases essential information about a property, including an image, title, price, and key details. Users can click on a card to access more detailed information about the property.

3 Data Table View: The "Data Table View" tab presents property listings in a tabular format. Users have the option to sort the table based on ID, title, or price. Additionally, a search feature allows users to filter properties by name. The data table is paginated, displaying 10 property listings per page with a total of 30 listings.

4 Sorting and Filtering: In the data table view, users can click on the column headers (ID, title, price) to sort the listings in ascending or descending order. The search bar enables users to filter listings by property name, making it easier to find specific properties of interest.

5 Property Detail Pages: Clicking on a property's ID, title, or price in either the card view or data table view leads users to a detailed page dedicated to that property. This page displays comprehensive information about the property, including its image, cost, bedroom and bathroom details, and whether it is a commercial or residential property.

- Navigation: Users can navigate back to the landing page by clicking the "Home" link on the property detail page.

# Demo
Check out the live demo of the project: Property Website Demo

# Installation
- Clone the repository to your local machine:
git clone https://github.com/KhadijaAwan/property_website.git

- Navigate to the project directory:
cd property_website

- Install dependencies using npm or yarn:
npm install
 or
yarn install
Usage
Start the development server:
npm run dev
 or
yarn dev
This will start the development server, and you can access the website at http://localhost:3000.

- Explore the property listings, switch between card and data table views, and experience the features mentioned above.

# Libraries Used
- React Spinner: Used for displaying loading animations.
- React Router DOM: Used for handling client-side routing.
- React Data Table: Used for rendering property data in a tabular format.
- Chakra UI: Used for styling the user interface components.
- Axios: Used for making HTTP requests to fetch property data from the API.
- API
  The property data is fetched from the following API: https://my-json-server.typicode.com/KhadijaAwan/api/listings

# Dependencies Setup and Installation
1 React Router DOM
  React Router DOM is used for handling client-side routing in the application.

- Installation:
 npm install react-router-dom
 or
yarn add react-router-dom

2 Chakra UI
Chakra UI is used for styling the user interface components.

- Installation:
  npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
 or
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion

3 React Spinners
React Spinners provides loading spinner animations for the website.

- Installation:
npm install react-spinners or yarn add react-spinners

4. Axios
Axios is used for making HTTP requests to fetch property data from the API.

- Installation:
  npm install axios or yarn add axios
  
5. React Data Table Component
React Data Table Component is used for rendering property data in a tabular format.

- Installation:
  npm install react-data-table-component
 or
yarn add react-data-table-component


# Contributing
Contributions are welcome! If you find any issues or want to enhance the project, feel free to open a pull request.

- Fork the repository.
- Create a new branch.
- Make your changes and commit them.
- Push the changes to your fork.
- Open a pull request explaining your changes.

# License
- This project is licensed under the MIT License.
