const express=require('express')

const router=express.Router();


const bookcontroller=require('../controllers/book')

router.get('/books', bookcontroller.getbookdetails)


router.get('/books1', bookcontroller.getbookdetails1)


router.get('/books2', bookcontroller.getbookdetails2)



module.exports=router;