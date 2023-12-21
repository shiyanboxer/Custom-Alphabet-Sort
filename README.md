## Custom Alphabet Sort

### Prompt

Please create a GitHub repo that is publicly available with a solution to the following problem. The solution can be in any language, with preference given to solutions in TypeScript. Please include instructions on how to run your code.
We need to alphabetically order a string. For example, given the input “HiiveIsLive", the output “eehiiiilsvv" is produced.
We need to further extend the function to take a second input which is a custom alphabet. The input should be an ordered list of all 26 characters in any order. The function should use this alphabet for ordering the input string.


### Quickstart

This guide will help you get the Custom Alphabet Sort application running on your local machine for development and testing purposes.

#### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 12 or newer)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the Repository**
   
   First, clone the repository to your local machine:

   ```bash
   git clone https://github.com/shiyanboxer/custom-alphabet-sort.git
   cd custom-alphabet-sort
   ```

2. **Install Dependencies**
   
   Inside the project directory, install the necessary dependencies:

   ```bash
   npm install
   ```

## Running the Application

To run the application in development mode, execute the following command:

```bash
npm run dev
```

This will start the server, on [http://localhost:3000](http://localhost:3000). Open the URL in your browser to view the application.

## Building for Production

To build the application for production, use:

```bash
npm run build
```


# Project Structure

This project follows a standard structure for a Next.js application. Here's an overview of the key directories and files:

- **`page.tsx`**: This is the entry point of the application. It's responsible for rendering the main page that users interact with.

- **`components/`**: This directory contains all the React components used in the application. Key components include:
  - `Footer`: The footer component, displayed at the bottom of the page.
  - `Form`: The form component, where users input data and submit for processing.
  - `Header`: The header component, which typically contains the navigation and branding.

- **`utils/`**: This directory holds utility functions that are used across the application. It includes:
  - `customSort`: A function that sorts a given string based on a custom alphabet.


### Technologies
Below is a list of the key technologies used in this project:

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces (version 18)
- **[TypeScript](https://www.typescriptlang.org/)**: A strongly typed programming language that builds on JavaScript (version 5)
- **[Next.js](https://nextjs.org/)**: A React framework for production (version 14.0.4)
- **[ESLint](https://eslint.org/)**: An extensible static analysis tool for identifying problematic patterns in JavaScript code (version 8)
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapidly building custom designs (version 3.3.0)


### Contact
Please reach out to shiyanboxer@gmail.com if you require any help.
