
// Module dependencies
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// db
var mongoose = require('mongoose');
mongoose.connect('mongodb://donmarv:weblock98@ds241025.mlab.com:41025/students');

var Student = mongoose.model('Student', mongoose.Schema({
    full_name:String,
	email:String,
	contact:String,
	gender:String,
	GPA:String
}));

// Configuration
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

// Routes

app.get('/api/students', function(req, res){
	Student.find(function(err, students){
		if(err)
			res.send(err);
		res.json(students);
	});
});

app.get('/api/students/:id', function(req, res){
	Student.findOne({_id:req.params.id}, function(err, student){
		if(err)
			res.send(err);
		res.json(student);
	});
});

app.post('/api/students', function(req, res){
	Student.create( req.body, function(err, student){
		if(err)
			res.send(err);
		res.json(student);
	});
});

app.delete('/api/students/:id', function(req, res){
	Student.findOneAndRemove({_id:req.params.id}, function(err, student){
		if(err)
			res.send(err);
		res.json(student);
	});
});

app.put('/api/students/:id', function(req, res){
	var query = {
		full_name:req.body.full_name,
		email:req.body.email,
		contact:req.body.contact,
		gender:req.body.gender,
		GPA:req.body.GPA
	};
	Student.findOneAndUpdate({_id:req.params.id}, query, function(err, student){
		if(err)
			res.send(err);
		res.json(student);
	});
});

app.listen(app.get('port'), function() {
	console.log('Node app is running on port', app.get('port'));
});