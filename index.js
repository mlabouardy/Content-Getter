var express=require('express');
var bodyParser=require('body-parser');

var app=express();


app.get('/',function(req,res){
	res.send('Get HTML content of any page');
});

app.get('/page/:url',function(req,res){
	var url=req.params.url;
	res.send(url);
});


app.listen(3000,function(){
	console.log('Working');
});