export const join = (req, res) => res.render("join", {pageTitle: "Join"});
export const edit = (req,res) => res.render("edituser", {pageTitle: "Edit User"});
export const remove = (req,res) => res.render("removeuser", {pageTitle: "Remove User"});
export const login = (req,res) => res.render("login",{pageTitle: "Login"});
export const logout = (req, res) => res.render("logout",{pageTitle: "Log Out"});
export const see = (req, res) => res.render("profile", {pageTitle: "Profile"});
export const seeuser = (req,res) => res.render("seeuser", {pageTitle: "See User"});