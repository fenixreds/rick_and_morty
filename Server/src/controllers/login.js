const users=require('../utils/users');

const login=(req,res)=>{
    const {email, password}=req.query;
    ////////////////////////////////////////////
    // let access=false;

    // users.forEach((user)=>{
    //     if(user.email===email&&user.password===password)
    //     access=true;
    // })
    // return res.status(200).json({access})

    //////////////////////////////////
    const foundUser=users.find(user=>user.email===email);
    
    if(foundUser){
        if(foundUser.password===password) return res.send({access:true});
        else return res.send({access:false});
    } else res.send({access:false});
    //////////////////////////////////////
}

module.exports={login};