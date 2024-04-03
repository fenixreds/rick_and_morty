const {Favorite}=require("../DB_connection");

const deleteFav=async(req,res)=>{

    const {id}=req.params;

    try {
        const deletedFavorite=await Favorite.findByPk(id);
        await deletedFavorite.destroy();

        const favoritos=await Favorite.findAll();
        res.status(200).json(favoritos)
        
    } catch (error) {
        res.status(500).json(console.log(error));
    }
    
};

module.exports=deleteFav;