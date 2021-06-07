const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const getbookdetails3=new Schema({
    Book_image:{
        type:String,
        required:true
    },
    Book_title:{
        type:String,
        required:true
    },
    Book_author:{
        type:String,
        required:true
    },
    Book_genre:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('jeep',getbookdetails3)