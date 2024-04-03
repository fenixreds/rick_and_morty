const {Favorite}=require("../DB_connection");

const getFavs=async(req,res)=>{

    try {
        const favoritos=await Favorite.findAll();
        res.status(200).json(favoritos);
        return favoritos;

    } catch (error) {
        res.status(500).json(console.log(error));
    }
};

module.exports=getFavs;