# ezEmployee

## Overview
ezEmployee is a web-based application designed to simplify HR tasks, from hiring to retirement. It allows users to manage employee data effectively with features to add, view, edit, and delete employee information. 

## Features
- **Add New Employees**: Input and submit details like name, title, department, email, phone number, and salary.
- **View All Employees**: Browse a list of all employees, with options to view detailed profiles.
- **Search Functionality**: Quickly find employees by name or department using a dynamic search feature.
- **Edit Employee Data**: Update any details of an employee's record.
- **Delete Employee Records**: Safely remove employee data from the system.

## Installation

To run ezEmployee locally, you'll need Node.js and MongoDB installed on your machine.

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/malikMai/ezEmployee.git
   cd ezEmployee

2. **Install dependencies**
npm install

3. **Configure environment variables**
Create a .env file in the root directory and update the following settings:
MONGODB_URI=your_mongodb_connection_string

4. **Start the application**
npm start

The server will start running on http://localhost:3077/.

## Usage
After installation, navigate to http://localhost:3077/ in your web browser to start using ezEmployee.

Home Page: Provides links to view all employees or add a new employee.
Add New Employee: Fill out the form to add a new employee's details to the database.
Search Employees: Use the search bar on the All Employees page to filter employees by name or department.
Edit/Delete: Each employee's detailed page has options to edit or delete the record.

## Support
For support, email malikcreese@gmail.com.