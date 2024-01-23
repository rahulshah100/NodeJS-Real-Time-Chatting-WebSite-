# NodeJS Realtime Chat Application
This project is a simple realtime chat application built using NodeJS and Socket.IO for seamless communication between the server and clients.


## Project Structure
-> nodeServer Directory consists of files that Constitute the server 
-> Whereas the rest of the files makes up the for the front-end/User Page
.
|-- CSS
|-- js
| |-- client.js
|-- nodeServer
| |-- node_modules
| |-- index.js
| |-- package-lock.json
| |-- package.json
|-- chat.png
|-- index.html
|-- Ting.wav

- **CSS**: Folder for cascading style sheets.
- **js**: Folder containing the frontend JavaScript script.
  - **client.js**: Connects the frontend script with the backend server using Socket.IO.
- **nodeServer**: Folder containing the NodeJS server files.
  - **node_modules**: Folder for NodeJS dependencies.
  - **index.js**: Server script handling Socket.IO connections, user events, and message broadcasting.
  - **package-lock.json**: Auto-generated file for npm package versioning.
  - **package.json**: Configuration file for NodeJS dependencies.
- **chat.png**: Image file used in the project.
- **index.html**: HTML file defining the structure of the chat application.
- **Ting.wav**: Audio file used for message notification.


## Important Node Commands Used are
1. npm init - initalise package.json in nodeServer
2. npm i socket.io - install socket.io library in node_modules
3. npm i nodemon - install socket.io library in node_modules
4. nodemon index.js - kick start nodeServer and host index.js file


## How to Run
1. Clone the repository.
2. Navigate to the `nodeServer` directory in your terminal.
3. Run `npm install` to install the required dependencies.
4. Start the server by running `node index.js`.
5. Open `index.html` in your browser to access the chat application.


## Features
- Realtime communication using Socket.IO.
- User joins and leaves notifications.
- Simple and intuitive user interface.


Feel free to contribute or customize the application as needed.
