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
		if (!req.session.currentUser){
			res.render('events',{isLoggedIn:false,
									events:allEvents});		
		}
		else {
			res.render('events',{isLoggedIn:true,
									events:allEvents});		
		}
	});

});

router.post('/add_event',function(req,res){
	if (!req.session.currentUser){
		res.send("Login to add");
	}
	else {
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
			res.send("addSuccessful");
		})
	}
	
})

router.post('/deleteEvent',function(req,res){
	if (!req.session.currentUser){
		res.send("Login to delete");
	}
	else {
		eventsModel.findOneAndRemove({title:req.body.title},function(){
			res.send("deleteSuccessful");
		});
	}

})



module.exports = router;
