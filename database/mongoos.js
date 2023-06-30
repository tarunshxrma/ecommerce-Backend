const mongoose = require('mongoose')

const connection = () => mongoose.connect("mongodb+srv://arjun48sharma:tarunsharma123@cluster0.nlwkxno.mongodb.net/?retryWrites=true&w=majority")

.then((res)=>{
    (res)
    console.log("connected")
})
.catch(()=>{
    console.log("not connected")
    
})


module.exports = connection