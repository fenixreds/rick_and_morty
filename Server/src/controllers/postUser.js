const {User}=require("../DB_connection");

const postUser=async(req,res)=>{

    const {email,password}=req.body;
    

    if(!email|!password){
        res.status(400).json("Faltan datos");
    }
    else{
        try {
            const [newUser,created]=await User.findOrCreate({
                where:{email:email},
                defaults:{password:password}
            });
            
            if(created){
                res.status(200).json(newUser.dataValues)
            }else{
                res.status(400).json("User ya existe");
            }
            
        } 
        catch (error) {
            res.status(500).json(console.log(error));
        }
    }
}

module.exports=postUser;
