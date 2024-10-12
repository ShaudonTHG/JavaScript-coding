const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const battlefields = {
  fortSumter: {
    state: 'SC',
  },
  manassas: {
    state: 'VA',
  },
  gettysburg: {
    state: 'PA',
  },
  antietam: {
    state: 'MD',
  }
}

// Add your code below:

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/battlefields/:name', (req, res, next) => {
  const battlefieldName = req.params.name;
  const battlefield = battlefields[battlefieldName];
  if (battlefield){
    res.send(battlefield);
  } else {
    res.status(404).send();
  }
});




//The code sets up an Express server that listens on a specified PORT.
//It includes a route /battlefields/:name that responds with battlefield data for a given name from the battlefields object. 
//If the name exists, it sends back the data; otherwise, it returns a 404 error.

