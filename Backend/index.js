const DBconnect = require('./db')
const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config();
const port = 5000;
var cors = require('cors');

DBconnect();

app.use(express.json())
app.use(cors())
app.use('/api/auth', require('./routes/Auth'));
app.use('/api/hotel', require('./routes/Hotels'));

app.get('/', (req, res)=>{
  res.send("Welcome to iNotebook API");
})

app.listen(port, () => {
  console.log(`inotebook is listening on port ${port}`)
})