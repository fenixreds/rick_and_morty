const {Favorite,User}=require("../DB_connection");


const postFav=async(req,res)=>{

const {id,name,origin,status,image,species,gender}=req.body;

if(!id|!name|!origin|!status|!image|!species|!gender){
    res.status(401).json("Faltan datos");
}
else{
    try {
        //const userLogin=await User.findOne({where:{email:"jose@gmail.com"}})
        const [favBody,created]=await Favorite.findOrCreate({
            where:{id:id},
            defaults:{
                name:name,
                origin:origin,
                status:status,
                image:image,
                species:species,
                gender:gender}
        });

        if(created){
            const favoritos=await Favorite.findAll();
            //await userLogin.addFavorites(favBody);
            res.status(200).json(favoritos)
        }else{
            res.status(400).json("Ya agrego este personaje a Favoritos");
        }
    } catch (error) {
        res.status(500).json(console.log(error));
    }
}

};

module.exports=postFav;