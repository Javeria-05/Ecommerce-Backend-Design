const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "public" folder
app.use(express.static('public'));

// Home Page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Product Listing Page
app.get('/products', (req, res) => {
  res.sendFile(__dirname + '/public/products.html');
});

// Product 1 Detail Page - Leather Handbag
app.get('/product1', (req, res) => {
  res.sendFile(__dirname + '/public/product1.html');
});

// Product 2 Detail Page - Stylish Watch
app.get('/product2', (req, res) => {
  res.sendFile(__dirname + '/public/product2.html');
});

// Product 3 Detail Page - Running Shoes
app.get('/product3', (req, res) => {
  res.sendFile(__dirname + '/public/product3.html');
});

// Start the server
app.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
