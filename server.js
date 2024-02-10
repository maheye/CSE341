const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("Hello!");
});

app.get('/austin', (req, res) => {
    res.send("Austin Ma");
  });

app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});