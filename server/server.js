const express = require('express');
const mongoose = require('mongoose');
//连接mongodb
const DB_URL = 'mongodb://127.0.0.1:27017/imooc';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})

//新建user
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))

/* User.create({
    user:'xiao',
    age:14
},function(err,doc){
    if(!err){
        console.log(doc)
    }else{
        console.log(err)
    }
}
)  */

/* User.remove({age:12},function(err,doc){
    console.log(doc);
})  */

 User.update({user:'xiao'},{age:100},function(err,doc){
    console.log(doc)
}) 
const app = new express();

app.get('/',function(req,res){
    User.find({},function(err,doc){
        res.json(doc)
    })
   // res.send('<h1>Hello express</h1>');
})

app.get('/data',function(req,res){
    res.json({name:'lvino',type:'it'});
})

app.listen(9000,function(){
    console.log('server at 9000')
})