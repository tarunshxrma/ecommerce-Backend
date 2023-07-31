const projectModel = require('../model/projectmodel')
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const secretKey = "shivampatil";

// const saltround = 10;
// const register = async (req, res, next) => {
//     const { name, email, password } = req.body
//     try {

//         const existingUser = await projectModel.findOne({ email: email })
//         if (existingUser) {
//             return res.status(200).json({ message: 'User already registered' });
//         }


//         const hashpassword = await bcrypt.hash(password, saltround)
//         // console.log(hashpassword) 
//         const model = new projectModel({ username: name, email: email, password: hashpassword })
//         const dbres = await model.save();
//         return res.send(dbres);
//     }



//     catch {
//         res.status(500).send("Server Error")
//     }
// }

// const login = async (req, res) => {
//     const { name, email, password } = req.body

//     const user = await projectModel.findOne({ email: email }); //{email:email} || {name: name}

//     if (user == null) {
//         return res.status(400).send("User Not Found")
//     }
//     try {
//         if (bcrypt.compareSync(password, user.password)) {
//             const token = jwt.sign({ useremail: user.email }, secretkey, { expiresIn: 3600 })
//             return res.send({
//                 msg: "user is registered with the token",
//                 token: token
//             })

//         }

//         return res.send("Not Allowed")

//     } catch (err) {
//         res.status(500).send("Server Error")
//         console.log(err)
//     }
// }

// module.exports = {
//     register,
//     login
// }


const register = async (req, res) => {
    const userInfo = req.body

    const existingUser = await projectModel.findOne({ email: userInfo.email })
    if (existingUser !== null) {
        return res.send("User already registered Please try to login")
    }
    const hashedPassword = bcrypt.hashSync(userInfo.password, saltRounds)
    userInfo.password = hashedPassword

    const data = await projectModel.create(userInfo)
    console.log(data)
    return res.send("User Registered Successfully")

}

const login = async (req, res) => {
    const loginInfo = req.body

    const isUser = await projectModel.findOne({ email: loginInfo.email })
    if (isUser == null) {
        return res.send("User is not registered Register first")
    }
    const checkUser = bcrypt.compareSync(loginInfo.password, isUser.password)
    if (checkUser) {
        const token = await jwt.sign({ userId: isUser._id, email: isUser.email }, secretKey, { expiresIn: '3h' })
        return res.send({ email: loginInfo.email, token: token, message: "User logged in successfully" })
    }
    return res.send("Password does not match Try entering the correct password")
}

module.exports = { register, login }