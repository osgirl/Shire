var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var photoAddUrlSchema = new Schema({
	photoUrl: String
});
var photoAddUrlModel = mongoose.model("photoUrl",photoAddUrlSchema);

/* GET home page. */
router.get('/', function(req, res) {
	//req.session.currentUser=true;
	if (!req.session.currentUser){
		res.render('login',{message:"please log in",
							isLoggedIn:false});
	}
	else {
		photoAddUrlModel.find(function(error,allPhotoUrls){
			res.render('photos',{allUrlPhotos:allPhotoUrls,
								isLoggedIn:true});
		});
	}
});

router.post('/urlAdd',function(req,res){

	if (req.body.toAddUrl.substring(0,4)==="http"){
		var newPhotoUrl = new photoAddUrlModel({
			photoUrl: req.body.toAddUrl.toString()
		})
		newPhotoUrl.save(function(error){
			if (error){
				return handleError(error);
			}
			res.redirect('/photos');
		});
	}
})

router.post('/deletePhoto',function(req,res){
	if (req.session.currentUser!=="rayray"){
		res.send("Sorry, you don't have permission to delete");
	}
	else {
		photoAddUrlModel.findOneAndRemove({photoUrl:req.body.photoUrl},function(){
			res.send("deleteSuccessful");
		});
	}

})

module.exports = router;
