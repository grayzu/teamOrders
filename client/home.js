Template.home.helpers({ 
    products : function() { 
      Meteor.subscribe("Products.search");
      return Products.find().fetch();   
    } 
}); 
