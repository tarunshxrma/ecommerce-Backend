const express = require('express')
const cors = require('cors')

const bestSeller = require('./Routers/bestSeller')
const iPhone = require('./Routers/iphone')
const iPad = require('./Routers/ipad')
const macbook = require('./Routers/macbook')
const accessorices = require('./Routers/accessories')

const route = require("./Routers/loginroute")
const bodyparser = require("body-parser");

const connection = require("./database/mongoos")
const app = express()

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(cors({origin: "*"}))


app.get('/', (req,res)=>{
    res.send("Home Page")
})

app.use('/', bestSeller)
app.use('/', iPhone)
app.use('/',iPad)
app.use('/',macbook)
app.use('/',accessorices)
app.use('/', route)

app.listen(8080, async()=>{
    await connection()
    // console.log("server started")
})