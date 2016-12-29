/* jshint esnext: true */
//General Server side code
import { Meteor } from 'meteor/meteor';

Meteor.startup(function() {
  // code to run on server at startup

  //Clear out Products and Filters database and load from Json file
  Products.remove({}); 
  Filters.remove({});

  //Import products.json into the Products collection
  productsJson = JSON.parse(Assets.getText("Products.json"));
  
  productsJson.forEach(function(item){
    Products.insert(item);
  });
  //Make sure fields are searchable
  Products._ensureIndex({
      "SKU": "text",
      "Brand": "text",
      "Category": "text",
      "Family": "text",
      "Description": "text"
  });

  //Import filter categories
  filtersJson = JSON.parse(Assets.getText("Filters.json"));
  
  filtersJson.forEach(function(filter){
    Filters.insert(filter);
  });
  
});

Meteor.publish('cart',function(id){
  return Cart.find({userId: this.userId});
});

Meteor.publish('filters', function(){
  return Filters.find({});
});

Meteor.publish('Products.search', function(searchTerm){
  if (!searchTerm) {
      return Products.find({});
  }
  var cursor = Products.find({ $text:{ $search: `\"${searchTerm}\"`}});
  return cursor;
});

Meteor.publish('orders', function(){
  return Orders.find({userId: this.userId});
});

Meteor.methods({
  'Product.AddtoCart': function(SKU, qty){
    if( Meteor.userId()) {
      var existingItem = Cart.findOne({userId: Meteor.userId(), SKU: SKU});

      if(!existingItem) {
        var productInfo = Products.findOne({SKU:SKU})
        return Cart.insert({userId: Meteor.userId(), 
                            SKU: SKU, 
                            qty: qty, 
                            Description: productInfo.Description, 
                            Price: productInfo.Price});
      }
      else {
        var newQty = parseInt(existingItem.qty) + parseInt(qty);
        
        Cart.update(existingItem,{$set:{qty: newQty}});
      }
    }
  },

  'Product.RemovefromCart': function(id){
    return Cart.remove({_id: id});
  },

  'Order.summary': function(){
      var teamPercentage = 0.05;
      var teamDues = 50;
      var itemsTotal = 0;
      var itemSummary = [];
      var cartItems = Cart.find({userId: Meteor.userId()}).fetch();

      for(i=0; i < cartItems.length; i++){
          var price = cartItems[i].Price;

          var itemInfo = {
              SKU: cartItems[i].SKU,
              Description: cartItems[i].Description,
              Price: price,
              Qty: cartItems[i].qty,
              SubTotal: parseInt(cartItems[i].qty) * parseFloat(price)
          };
          itemsTotal += itemInfo.SubTotal;
          itemSummary.push(itemInfo);
      }
      var teamTax = itemsTotal * teamPercentage;
      
      if(Orders.findOne({userId: Meteor.userId()})) removeOrder();
      
      Orders.insert({userId: Meteor.userId(), 
              itemSummary: itemSummary, 
              teamDues:{orderPercent: teamTax, dues: teamDues}, 
              grandTotal: itemsTotal + teamTax + teamDues});
  },
  'Order.remove': function(){
    removeOrder();
  }
});

function removeOrder(){
  Orders.remove({userId:{$eq: Meteor.userId()}});
}