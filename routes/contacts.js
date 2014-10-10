
exports.index = function(req,res,next){
    res.render('contacts',{title:'Shire'});
    res.end();
}