const axios=require('axios');
const url='https://rickandmortyapi.com/api/character';
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const getCharById=async (req,res)=>{
    
    //logica para sacar el ID de req
    const {id}=req.params;

    
    try{
        const result =await axios.get(`${url}/${id}`)
        const charApi=result.data;
        
            const character={
                id:charApi.id,
                name:charApi.name,
                status:charApi.status,
                species:charApi.species,
                gender:charApi.gender,
                origin:charApi.origin,
                image:charApi.image
                
                
                
            }
            if(charApi.name){
                return res.status(200).json(character);
            }
            else{
                return res.status(404).json();
            }
        }
    
    
        
    
    catch(error){
        return res.status(500).json({message: error.message})
        
    }
    
};



module.exports={getCharById};