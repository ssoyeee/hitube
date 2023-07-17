export const localsMiddleware = (req, res, next) => {
    console.log(req.session);
    if (req.session.loggedIn){
        res.locals.loggedIn = true;
    }
    //req.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName = "Hitube";
    res.locals.loggedInUser = req.session.user || {};
    console.log(res.locals);
    next();
};

export const protectorMiddleware = (req, res, next) => {
    if(req.session.loggedIn) {
        return next();
    } else {
        return res.redirect("/login");
    }
};

export const publicOnlyMiddleware = (req, res, next) => {
    if(!req.session.loggedIn){
        return next();
    } else {
        return res.redirect("/");
    }
};