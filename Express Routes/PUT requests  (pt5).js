const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;

const soups = ['gazpacho', 'borscht', 'primordial', 'avgolemono', 'laksa'];
// Add your code below:

app.post('/soups', (req, res, next) => {
  const name = req.query.name
  soups.push(name);
  res.status(201).send(name);
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});





//When someone uses the PUT method on /currencies/:name/countries,
//it gets the currencyName from the URL path and countries from query parameters. 
//Then it updates the currencies object with this data and sends back the updated currency entry as a response.


