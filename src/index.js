const express = require('express');
const path = require('path');
const app = express();

// Use the PORT environment variable provided by the environment (e.g., IBM Code Engine)
const port = process.env.PORT || 8080;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../public')));

// Serve JavaScript files from the 'src' directory
app.use('/src', express.static(path.join(__dirname, '../src')));

// Define a route to serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
