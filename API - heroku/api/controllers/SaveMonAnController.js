const { json } = require('express/lib/response');
const Admin = require('mongodb/lib/admin');

module.exports = {

    // API lay danh sach cac mon an nguoi dung da save.............................

    ds_monanUserSave: (req, res) => {

        let user = req.params.user;

        var mongoose = require('mongoose');

        //Set up default mongoose connection
        var mongoDB = 'mongodb+srv://vanluat:12345@cluster0.owctn.mongodb.net/CookingRecipe?retryWrites=true&w=majority';
        mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
        
        //Get the default connection
        var db = mongoose.connection;
        
        //Bind connection to error event (to get notification of connection errors)
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        
        db.once('open', function () {
        
          var query = { UserName : user.toString() };
          db.collection("UserSaveMonAn").find(query).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
          });
        });       
  },


  // API - User save mot mon an.............................

  monanInsertSave: (req, res) => {

    let data = req.body;

    var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://vanluat:12345@cluster0.owctn.mongodb.net/CookingRecipe?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function () {

  var collection = db.collection('UserSaveMonAn');

  db.collection('MonAn').find({TenMonAn : data.MonAn.toString()}).toArray(function(err, result) {
    if (err) throw err;

    //data.MonAn = result[0]._id.toString();

collection.insertOne(data, function (err, result) {
    if (err) {
   res.json({message: 'That bai!', data : false})
  } else {
    res.json({message: 'Thanh cong!', data : true})
         }
 db.close();
   });     
 });   
});     
  },


  // API - User unsave mot mon an.............................

  monanUnSave: (req, res) => {

    let data = req.body;

    var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://vanluat:12345@cluster0.owctn.mongodb.net/CookingRecipe?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function () {

  var myquery = {UserName  : data.UserName, MonAn : data.MonAn };
            
  db.collection("UserSaveMonAn").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    db.close();
  });

 res.json({message: 'Xoá thành công !', data : true})

});
  },
}