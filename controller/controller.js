const projectModel = require('../model/projectmodel')
const bcrypt = require('bcryptjs');

const saltround = 10;
const register = async (req,res,next) => {
    const { name, email, password} = req.body
    try {
        
        const existingUser = await projectModel.findOne({email:email})
        if (existingUser) {
            return res.status(200).json({ message: 'User already registered' });
          }
        else{

            const hashpassword =await bcrypt.hash(password, saltround) 
            // console.log(hashpassword) 
            const model = new projectModel({ username:name, email:email ,password:hashpassword })
            const dbres = await model.save();
            return res.send(dbres);
        }
        
    }
        
    catch{
        res.status(500).send("Server Error")
    }
}

const login = async (req,res) => {
    const { name ,email, password} = req.body
    
    const user = await projectModel.findOne({email:email}); //{email:email} || {name: name}
    
    if (user == null){
        return res.status(400).send("User Not Found")
    }
    try{
        if(bcrypt.compare(password, user.password)){
           return res.send("success")
        }
        else(
            res.send("Not Allowed")
        )
    }catch{
        res.status(500).send("Server Error")
    }
}

module.exports = {
    register,
    login
}