export default (req, res, next) => {

    // is token valid
    const isUserAuthenticated = false;
    
    (isUserAuthenticated) ? next() : res.status(401).json({
        error: "The user has no permissons"
    });
}