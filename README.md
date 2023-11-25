# ISD-app

## Prerequisites

Make sure you have the following installed:

Node.js (version 20.10.0 or higher)
npm

## Installation

1. Clone the repository:
   git clone https://github.com/keelworks/isd-app.git
2. Navigate to the parent directory:
   cd isd-app
3. Install dependencies:
   npm install
4. Navigate to the Next.js (client) directory:
   cd client
5. Install dependencies for the Next.js app:
   npm install

[Remember to install the dependencies for both the Node/Express application and the client(subdirectory) NextJS application]

## Running the Application

### Development Mode

To run the application in development mode, use the following command

Inside the parent directory run:

npm run dev <br>
This will start the Node/Express backend using nodemon and the Next.js frontend. Access the application at http://localhost:3000.

### Production Mode

To build and run the application in production mode, use the following commands

Inside the parent directory run:

npm run build <br>
npm start <br>
This will build the Next.js application and start the Node/Express server in production mode.

### Environment varibles

All environment variable files will be secure DO NOT PUSH THEM INTO THE REPO.

License
This project is licensed under the MIT License - see the LICENSE file for details.
