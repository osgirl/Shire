var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var eventsSchema = new Schema({
	title: String,
	description: String,
	eventWhere: String,
	eventWhen: String,
	meetWhere: String,
	meetWhen: String
})
var eventsModel = mongoose.model("events",eventsSchema);

router.get('/', function(req, res) {
	eventsModel.find(function(err,allEvents){

		res.render('events',{events:allEvents});
	})
});

router.post('/add_event',function(req,res){
	var newEvent = new eventsModel({
		title: req.body.title,
		description: req.body.description,
		eventWhere: req.body.eventWhere,
		eventWhen: req.body.eventWhen,
		meetWhere: req.body.meetWhere,
		meetWhen: req.body.meetWhen
	});
	newEvent.save(function(error){
		if (error){
			return handleError(error);
		}
	})
	res.redirect('/events');
})

router.post('/deleteEvent',function(req,res){
	eventsModel.findOneAndRemove({title:req.body.title},function(){
	});
	res.redirect('/events');
})



module.exports = router;
