var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var moviesSchema = new Schema({
	title: String,
	voters: [String]
});
var moviesModel = mongoose.model("movies",moviesSchema);

/* GET home page. */
router.get('/', function(req, res) {
	moviesModel.find(function(error,movies){
		for (var i=1;i<movies.length;i++){
			var x = movies[i];
			var j=i;
			while (j>0 && movies[j-1].voters.length<x.voters.length){
				movies[j]=movies[j-1];
				j=j-1;
			}
			movies[j]=x;
		}
		res.render('movies',{allMovies:movies});
	});
});

router.post('/addMovie', function(req,res){
	if (!req.session.currentUser){
		res.send('Login To Add');
	}
	else {
		moviesModel.findOne({title:req.body.movieTitle},function(error,movie){
			if (movie===null){
				var newMovie = new moviesModel({
					title:req.body.movieTitle,
					voters:[]
				});
				newMovie.save(function(error){
					if (error){
						return handleError(error);
					}
					res.send("addSuccessful");
				})
			}
			else {
				res.send("That movie already exists!");
			}
		});
	}
});

router.post("/voteMovie", function(req,res){
	if (!req.session.currentUser){
		res.send('Login To Vote');
	}
	else {
		moviesModel.findOne({title:req.body.movieTitle},function(error,movie){
			var alreadyVoted = false;
			for (var i=0;i<movie.voters.length;i++){
				if (movie.voters[i]===req.session.currentUser){
					alreadyVoted = true;
				}
			}
			if (alreadyVoted){
				res.send("You already voted for this!");
			}
			else {
				movie.voters.push(req.session.currentUser);
				movie.save(function(error){
					if (error){
						return handleError(error);
					}
					res.send("voteSuccessful");
				})
			}
		})
	}
});

router.post("/deleteMovie", function(req,res){
	if (!req.session.currentUser){
		res.send("Login To Delete");
	}
	else {
		moviesModel.findOneAndRemove({title:req.body.movieTitle},function(){
			res.send("deleteSuccessful");
		});
	}
});

module.exports = router;
