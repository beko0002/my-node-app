const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;

app.get('/', (req, res) => {
  res.send('Hello, World! heyyyy');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
