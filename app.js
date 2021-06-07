const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors')
const app=express();
const routes=require('./routers/index')
const host='0.0.0.0';
const port=process.env.PORT||2025;

app.use(cors());

app.use(express.json())

app.use('/',routes)

mongoose.connect('mongodb+srv://BujalaSarathKumarReddy:12345abcd@cluster0.nud0w.mongodb.net/RepozitoryTechnologies?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true },()=>{

app.listen(port,host,()=>{
    console.log(`Server is runnning at ${host} : ${port}`)
})

})


