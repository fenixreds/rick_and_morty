const {User}=require("../DB_connection");

const login=async(req,res)=>{

    const {email,password}=req.query;

    if(!email|!password){
        res.status(400).json("Faltan datos");
    }
    else{
        try {
            const userQuery=await User.findOne(
                {where:{email:email}}
            );
            if(!userQuery){
                res.status(404).json("Usuario no encontrado");
            }
            else{
                if(userQuery.password===password){
                    res.status(200).json({access:true});
                    return userQuery;
                }
                else{
                    res.status(403).json("Contraseña incorrecta");
                }
                
                
            }
        } catch (error) {
            res.status(500).json(console.log(error));
        }
    }

}

module.exports=login;