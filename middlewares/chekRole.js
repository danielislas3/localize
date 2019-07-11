module.exports = owner => {
    return (req, res, next) => {
        if (req.user && req.user.owner === true) {
            next()
        } else {
            res.redirect('/')
        }
    }
}