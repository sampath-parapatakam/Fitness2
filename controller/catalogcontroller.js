var express=require('express');
var router=express.Router();
var catalogcontroller = express();
var itemDB= require('../models/itemDB')

router.get('/',function(req,res){
  res.render('index');
});
router.get('/home',function(req,res){
  res.render('index');
});
router.get('/index',function(req,res){
  res.render('index');
});
router.get('/categories',function(req,res){
var category = req.query.catalogCategory;
  var allItems = itemDB.getItems();
if(category !== undefined && (category === "Strength" || category === "Endurance" || category === "Cardio")){

  res.render('categories',{category: category,data:itemDB.getCategoryItems(category)});
}else if(category !== undefined){
  res.send("No information available");
}else{
  res.render('categories',{category: category,data:itemDB.getItems()});
}
});
router.get('/about',function(req,res){
  res.render('about');
});
router.get('/contact',function(req,res){
  res.render('contact');
});
router.get('/myItems',function(req,res){
  res.render('myItems');
});
router.get('/item',function(req,res){
  var ItemCode= req.query.itemCode;
  var category = req.query.catalogCategory;
  var result=itemDB.getItem(ItemCode);
  if(Object.keys(req.query.itemCode).length ===0){
    res.render('categories',{category: category,data:itemDB.getItems()});
  }
  else if (result == undefined){
    res.send('no item available');
  }

  else{
  res.render('item',{result:result});
}
});
router.get('/feedback',function(req,res){
  res.render('feedback');
});

module.exports = router;
