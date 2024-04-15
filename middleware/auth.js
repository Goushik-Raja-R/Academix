const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();

const GenerateToken =(email)=>{
    return jwt.sign({email},process.env.SECRET_KEY,{
        expiresIn:'1d'
    })
}

var Authentication = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);
    
    jwt.verify(token,process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            console.error('Error verifying token:', err);
            return res.sendStatus(401); // Send unauthorized status for invalid token
        }
        req.user = decoded; // Attach user information to request object
        next();
    });
};

const VerifyTokenHandler = (req,res)=>{
    const userDetails = req.user;
    res.status(200).json({
        success: true,
        message: 'Token verified successfully',
        user: userDetails
    });
}

// const ROLES = {
//     STUDENT: 'student',
//     TEACHER: 'teacher',
//     ADMIN: 'admin'
// };

// const checkRole = (Role) => {
//     return (req, res, next) => {
//         if (req.user && req.user.role === ROLES[Role]) {
//             next(); //check if the user have required role 
//         } else {
//             res.status(403).send('Access denied'); 
//         }
//     };
// };

module.exports = {GenerateToken,Authentication,VerifyTokenHandler}