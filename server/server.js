const express = require('express')

const app = new express();

app.get('/',function(req,res){
    res.send('<h1>Hello express</h1>');
})

app.get('/data',function(req,res){
    res.json({name:'lvino',type:'it'});
})

app.listen(9000,function(){
    console.log('server at 9000')
})