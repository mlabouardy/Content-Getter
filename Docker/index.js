var express=require('express');
var bodyParser=require('body-parser');

var app=express();


app.use(express.static('client/dist'));

app.listen(3000,function(){
	console.log('Working');
});