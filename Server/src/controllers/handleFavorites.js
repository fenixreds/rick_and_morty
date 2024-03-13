let myFavorites=[]

const postFavorite=(req, res)=>{
    const character=req.body;
    myFavorites.push(character);
    return res.status(200).json(myFavorites);
    
    
}

const deleteFavorite=(req,res)=>{
    const{id}=req.params;
    myFavorites = myFavorites.filter(char=>char.id !==Number(id)); 
    
    return res.json(myFavorites);
    
}

const getFavorite=(req,res)=>{
    return res.status(200).json(myFavorites);
}

module.exports={postFavorite,deleteFavorite,getFavorite};