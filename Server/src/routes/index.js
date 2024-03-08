const express=require("express");
const router=express.Router();

const {getCharById}=require('../controllers/getCharById');
const {login}=require('../controllers/login');
const {postFavorite,deleteFavorite,getFavorite}=require('../controllers/handleFavorites');




router.get("/character/:id",getCharById);
router.get("/login",login)
router.post("/fav",postFavorite);
router.delete("/fav/:id",deleteFavorite);
router.get("/fav",getFavorite)

module.exports=router;