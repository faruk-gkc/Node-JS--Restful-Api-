const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt');
// const adminController = require('../controllers/adminController')

const User = require('../models/adminModel');

// const exMiddleware = require('../middlewares/thirdPartyMiddleware')

/* Todo Listeleme Islemi Burada Yapilacak. */
router.get('/', (req, res, next)=> {
  
    User.find()
    .then((sonuc) => {res.json(sonuc)})
    .catch((err) => {res.json(err)})
  
});

/* Todo Ekleme Islemi Burada Yapilacak. */
router.post("/", (req, res, next)=>{
 
    new User({
      user: req.body.user,
      age: req.body.age,
      job: req.body.job,
      sifre:req.body.sifre
    })
    .save()
    .then(() => {res.json("Kaydetme İşlemi Başarılı.")})
    .catch((err) => {res.json("Kaydetme İşleminde Hata Oluştu.")});

     
  
});

/* Todo Guncelleme Islemi Burada Yapilacak. */
router.put("/:id", (req, res, next)=>{
  
    const id = req.params.id;

    User.findByIdAndUpdate({"_id": id}, req.body)
    .then((newUser) => {
        res.json("Güncelleme İşlemi Başarılı.");
    }).catch((err) => {
        res.json("Güncelleme İşleminde Hata Oluştu.");
    });
  
});

/* Todo Silme Islemi Burada Yapilacak. */
router.delete("/:id", function(req, res, next){
  
    const id = req.params.id;
    User.findByIdAndRemove(id).then(() => {
        res.json("Silme İşlemi Başarılı.");
    }).catch((err) => {
        res.json("Silme İşleminde Hata Oluştu.");
    });
  
});

// router.patch('/:id', async(req,res,next) => {

//     if(req.body.hasOwnProperty('sifre')){
//         req.body.sifre = await bcrypt.hash(req.body.sifre, 10); 
//     }
//     console.log(sifre, req.body.sifre);
// });
module.exports = router