
exports.checkRole = (req,res,next)=>  {
        console.log(req.user)
        if (req.user && req.user.owner === true) {
            next()
        } else {
            res.redirect('/')
        }
    }
