const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.json());
app.use('/api', routes);

// Serve static files from the main directory
app.use(express.static(__dirname)); 

// Serve index.html for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); 
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
