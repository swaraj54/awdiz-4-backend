import express from 'express';
import router from './Routes/index.js';

const app = express();
app.use((req, res, next)=>{
    console.log("hi from middleware use")
    // res.send("hi from middleware use")
    next();
})

app.get("/", function (req, res) {
    res.send("Hello Awdiz..")
})

app.use("/api/v1", router)

app.listen(8000, () => console.log("App is running on port 8000."))

// http://localhost:8000/api/v1/auth/login

// /api/v1/


// /Auth 

// /login 
// /register 


// /Product 
// /users 
// /admin 