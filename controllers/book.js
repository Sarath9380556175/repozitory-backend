const book=require('../modals/book')
const book1=require('../modals/book1');
const book2=require('../modals/book2')
const book3=require('../modals/book3')

exports.getbookdetails=(req,res)=>{
    book.find()

    .then(response=>res.status(200).json({message:'books details fetched successfully',book:response}))

    .catch(err=>res.status(500).json({error:err}))

}

exports.getbookdetails1=(req,res)=>{
    book1.find()

    .then(response=>res.status(200).json({message:'books details fetched successfully',book1:response}))

    .catch(err=>res.status(500).json({error:err}))

}

exports.getbookdetails2=(req,res)=>{
    book2.find()

    .then(response=>res.status(200).json({message:'books details fetched successfully',book2:response}))

    .catch(err=>res.status(500).json({error:err}))

}

exports.getbookdetails3=(req,res)=>{
    book3.find()

    .then(response=>res.status(200).json({message:'books details fetched successfully',book3:response}))

    .catch(err=>res.status(500).json({error:err}))

}

