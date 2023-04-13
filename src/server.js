import express, { application } from "express";
import morgan from "morgan";

const PORT = 4000; //convention for backend
const app = express();
const logger = morgan("dev");
// const logger = (req, res, next) => {
//     console.log(`Someone is going to: ${req.method}, ${req.url}`);
//     next();
// }
const URLLogger = (req, res, next) => {
    console.log("Path: ", req.url);
    next();  
};
const timeLogger = (req, res, next) => {
    const date = new Date();
    const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()];
    console.log(`Time: ${year}.${month}.${day}`);
    next();
};
const securityLogger = (req, res, next) => {
    const proto = req.protocol;
    if (proto === 'https'){
        console.log("Secure");
    } else {
        console.log("Insecure");
    }
    next();
};
const protectorMiddleware = (req, res, next) => {
    const url = req.url;
    if(url === "/protected"){
        return res.send("<h1>You are not allowed to access this page.</h1>");
    }
    next();
};
//handleHome is finalware because if you return anything, the connection will be finished.
//but all middleware can be controller
const handleHome = (req, res) => { 
    return res.send("<html><h1> You have successfully arrived at home. </h1></html>");
};
const handleProtected = (req, res) => {
    return res.send("Welcome to the private lounge");
};
//we use the gossipmiddleware first
// app.use(logger);
//app.use();
//we get the url
app.use(logger);
app.use(URLLogger, timeLogger, securityLogger);
app.get("/", handleHome);
app.get("/protected", protectorMiddleware, handleProtected);

const handleLogin = (req, res) => {
    // return res.send({message: "Login here."});
    return res.send("<h1>Login</h1>")
}
const handleAbout = (req, res) => {
    return res.send("<h2>About our company: </h2>");
}
const  handleContact = (req, res) => {
    return res.send("<h2>Please reach out to me if you have anything from me!</h2>");
}

app.get("/login", handleLogin);
app.get("/about", handleAbout);
app.get("/contact", handleContact);

//const handleListening = () => console.log("Server listening on port 4000!");
//app.listen(4000, handleListening);

//less version
app.listen(PORT, () => console.log(`Server listening on port http://localhost:${PORT}!`));