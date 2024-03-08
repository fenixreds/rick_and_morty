const axios=require('axios');
const url='https://rickandmortyapi.com/api/character';
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const getCharById=(req,res)=>{
    
    //logica para sacar el ID de req
    const {id}=req.params;

    
    try{
        axios.get(`${url}/${id}`)
        .then((response)=>response.data)
        .then((data)=>{
            const character={
                id:data.id,
                image:data.image,
                name:data.name,
                gender:data.gender,
                species:data.species
            }
            if(data.name){
                return res.status(200).json(character);
            }
            else{
                return res.status(404).json();
            }
            })
    }
    
        
    
    catch(error){
        return res.status(500).json({message: error.message})
        
    }
    
};



module.exports={getCharById};