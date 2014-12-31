var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');

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
	else {
		res.redirect('/photos');
	}
})


router.post('/fileAdd', function(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        // `file` is the name of the <input> field of type `file`
        var old_path = files.toAddFile.path;
        var file_size = files.toAddFile.size;
        var file_name = files.toAddFile.name.split('/').pop();
        var directoryName = __dirname.substring(0,__dirname.length-7);
        var new_path = path.join(directoryName, 'public/images/shire_photos/', file_name);
        fs.readFile(old_path, function(err, data) {
            fs.writeFile(new_path, data, function(err) {
                fs.unlink(old_path, function(err) {
                    if (err) {
                        res.send("unsuccessful");
                    } else {
                    	var newPhotoUrl = new photoAddUrlModel({
                    		photoUrl: "images/shire_photos/"+file_name
                    	})
                    	newPhotoUrl.save(function(error){
                    		if (error){
                    			return handleError(error)
                    		}
                    		res.redirect('/photos');
                    	})
                    }
                });
            });
        });
    });
});


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
