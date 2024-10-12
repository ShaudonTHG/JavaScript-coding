const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

// Add your code below:

const sausageTypes = ['bratwurst', 'andouille', 'chorizo', 'boudin', 'kielbasa'];

app.get('/sausages', (req, res, next) => {
  res.send(sausageTypes)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});



//The code uses the app.get() method. This method sets up a route handler 
//for GET requests to the /sausages endpoint. When a GET request is made to
//this endpoint, the server responds by sending the sausageTypes array.