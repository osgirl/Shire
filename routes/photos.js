var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var photoAddUrlSchema = new Schema({
	photoUrl: String
})
var photoAddUrlModel = mongoose.model("photoUrl",photoAddUrlSchema);

/* GET home page. */
router.get('/', function(req, res) {
	//req.session.currentUser=true;
	if (!req.session.currentUser){
		res.render('login',{message:"please log in"});
	}
	else {
		photoAddUrlModel.find(function(error,allPhotoUrls){
			res.render('photos',{allUrlPhotos:allPhotoUrls});
		});
	}
});

router.post('/urlAdd',function(req,res){

	if (req.body.toAddUrl.substring(0,4)==="http"){
		var newPhotoUrl = new photoAddUrlModel({
			photoUrl: req.body.toAddUrl.toString()
		})
		console.log(newPhotoUrl);
		newPhotoUrl.save(function(error){
			if (error){
				return handleError(error);
			}
		});
	}
	res.redirect('/photos');
})

router.post('/deletePhoto',function(req,res){
	photoAddUrlModel.findOneAndRemove({photoUrl:req.body.photoUrl},function(){
	});
	res.redirect('/photos');
})

module.exports = router;
