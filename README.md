# Transactions List Project

![App in action](<CleanShot 2024-02-01 at 18.45.25.gif>)

## Overview

This project is a simple transactions list application built using React, Chakra UI, React-Table, and React-Query. It allows users to view a list of transactions and perform basic operations.

## IMPORTANT CONSIDERATIONS

- Business Use Case : I built this under the assumption that an account would be in some crypto coin and then the credit card transaction associated with it would be the off-ramping .
- API Fetch Design : For implementing pagination on the server the idea here is to use cursor-based pagination rather than offset-based pagination (https://slack.engineering/evolving-api-pagination-at-slack/). I actually loved this part. Therefore there are 2 paginations if you will, one on the API and another on the list component. Much like in the famous infinite scroll design (twitter, facebook feed) the idea is to trigger another fetch call using the cursor provided on the last call once certain criteria has been met. In this case rather than the distance to the end of the page is how many pages (on the list component) with data there are left. This in my view is the best approach for performance since I imagine the data sets can be huge. 
- Improvements - a lot of next steps could be taken here, more tests of course, creating a component library that holds all the chakra ui instances, once there are more queries and APIs turning the react query into a centralized custom hook etc.. Filtering and searching on the table itself would be very easy with react-table and I did outline on the API at the very least a timeframe query (I envision it as a selector with last month , last year etc that gets translated into two iso dates start and end)

All in all I had a wonderful time with this!

## Features

- Display a list of transactions.
- Pop up for detail.
- Intuitive and responsive UI design using Chakra UI.
- Efficient data handling with React-Query.
- Pagination and Table infra with React-Table.
- Fetch API design using cursor-based pagination.
- Domain Driven Design approach

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/transactions-list.git

2. Navigate to appropriate directory
  
     ```bash
   cd transactions-list

3. Install dependencies using npm
   
   ```bash
   npm install

## Usage

After installing the dependencies, you can run the project and start the development server with the following command

   ```bash
   npm run dev
   ```

This will start the development server, and you can view the application by opening your browser and navigating to http://localhost:5173/ , you can change the port if its already in use on your local machine on the package.json


## Test

To run the tests for the project, use the following command:

    ```bash
    npm run test
    ```
    

There is only one test available, definitely something I would want to improve


## Libraries Used

- React: A JavaScript library for building user interfaces.
- Chakra UI: A simple, modular, and accessible component library for React.
- React-Table: A lightweight and extensible data grid for React.
- React-Query: A library for managing, caching, and synchronizing asynchronous and remote data.


Hope you like it! 