const checkRole = (...allowedRoles) => {
    return (req, res, next) => {
        const userRole = req.headers.role;

        if(!userRole) {
            res.status(401).json({message : "Authenication is required, credential requires"});
        }

        if(allowedRoles.includes(userRole)) {
            next();
        }
        else {
            res.status(403).json({message  : "You are not allow to perform this action"});
        }
    }
}

module.exports = checkRole;