const authorize=(req,res,next)=>{
    const {user}=req.query;
    if(user=='Farrukh'){
        req.user={name:'john',id:3}

    }
    else{
        res.status(401).send('unauthorized')
    }
    next()
}
module.exports=authorize