import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => res.render("join", {pageTitle: "Join"});
export const postJoin = async (req, res) => {
    const {name, username, email, password, password2, location} = req.body;
    const pageTitle = "Join";
    const exists = await User.exists({$or:[{username},{email}]});
    if(password!==password2){
        return res.status(400).render("join",{
            pageTitle,
            errorMessage: "Password confirmation doesn't match"
        })
    }
    if(exists){
        return res.status(400).render("join",{
            pageTitle,
            errorMessage: "This username/email is already taken.",
        });
    }
    try{
    await User.create({
        name,
        username,
        email,
        password,
        location,
    });
    return res.redirect("/login");
}catch(error){
    return res.status(400).render("join", {
        pageTitle,
        errorMessage: error._message,
    });
}
};

export const getLogin = (req,res) => res.render("login",{pageTitle: "Login"});
export const postLogin = async (req, res) => {
    const {username, password} = req.body;
    const pageTitle = "Login"
    //check if account exists
    const user = await User.findOne({username});
    if(!user){
        return res.status(400).render("login", {
            pageTitle, 
            errorMessage:"An account with this username does not exists."
        });
    }
    //check if password correct
    const ok = await bcrypt.compare(password, user.password);
    if(!ok){
        return res.status(400).render("login",{
            pageTitle,
            errorMessage: "Wrong password",
        });
    }
    req.session.loggedIn = true;
    req.session.user = user;
    return res.redirect("/");
};

export const edit = (req,res) => res.render("edituser", {pageTitle: "Edit User"});
export const remove = (req,res) => res.render("removeuser", {pageTitle: "Remove User"});
export const logout = (req, res) => res.render("logout",{pageTitle: "Log Out"});
export const see = (req, res) => res.render("profile", {pageTitle: "Profile"});
export const seeuser = (req,res) => res.render("seeuser", {pageTitle: "See User"});