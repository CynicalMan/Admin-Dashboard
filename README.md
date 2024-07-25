# Admin-Dashboard with ReactTs and Redux Toolkit

This is a frontend application built with ReactJS, Redux Toolkit, and TypeScript. It allows users to perform CRUD (Create, Read, Update, Delete) operations on items through a mock API. The application features a dashboard with a sidebar for navigation and separate pages for listing items, adding/editing items, and viewing details.

## Features
- List items
- Add new items
- Edit existing items
- Delete items
- Error Handling
- Responsive design

## Live Demo URL
- depolyed on github pages : https://cynicalman.github.io/Admin-Dashboard

## Setup Instructions

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation And Starting the Application 

1. Clone the repository:
   ```bash
   git clone https://github.com/CynicalMan/Admin-Dashboard.git

2. Change to the project directory:
   ```bash
   cd react-crud-app

3. Install the project dependencies using npm:
   ```bash
   npm i
   
4. Run the development server:
   ```bash
   npm start


#### Brief Explanation of CRUD Operations

Describe how each CRUD operation is implemented in your application.

Example: To get items, we use createAsyncThunk to handle the asynchronous API request. Here’s how it’s implemented:
```js
export const getItems = createAsyncThunk("items/getItems", async () => {
    const response = await axios.get<Item[]>("https://jsonplaceholder.typicode.com/todos"); 
    return response.data;
});
```

## CRUD Operations

### Create

- Users can add new items via the "Add Item" page.
- Data is submitted through a form and sent to the mock API to be added.

### Read

- Users can view a list of items on the dashboard.
- Clicking on an item in the list opens a detail view.

### Update

- Users can edit existing items by navigating to the "Edit Item" page.
- Changes are submitted through a form and sent to the mock API to update the item.

### Delete

- Users can delete items directly from the item list.
- The item is removed from the list and sent to the mock API for deletion.

  ## Additional Notes

- The application uses mock data from JSONPlaceholder for simulation purposes.
- this application is deployed on github pages, and each time the dev branch is merged with master and automated workflow will run and deploy the latest merged commits on master branch
- The application is using DataGrid from MUI to represent table data and MUI Icons 
- The application is styled using [Tailwind CSS](https://tailwindcss.com/) for a clean and responsive design.
- The application also uses the factory design pattern to generate input field with various types 



