const express = require('express');

const app = express();

// Add your code below:
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`)
})

//This code uses express, a web application framework for Node.js,
//to create a server app. The app.listen function starts the server,
//listening on the specified PORT. It logs a message to the console 
//confirming the port number once the server is running.