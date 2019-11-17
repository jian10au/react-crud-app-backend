const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

require('dotenv').config()

const PORT = process.env.PORT || 5000;

const dbOptions = {useNewUrlParser:true,useUnifiedTopology:true}
mongoose.connect(process.env.DB_URL

,dbOptions, (err) => {
    if(err) {
        console.log('DB not connected')
    }else{
        console.log('DB connected')
    }
}

)

const app = express();

app.use(cors())

app.use('/', routes())











app.listen(PORT, () => console.log('Listening on PORT ', PORT))