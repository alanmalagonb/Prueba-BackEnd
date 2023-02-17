const express = require('express');

const routes = require('./routes/routes')

const app = express();

app.use(express.json());


app.use('/station', stationRoutes)


app.listen(3000, ()=>{
    console.log('Listening on port 3000')
})