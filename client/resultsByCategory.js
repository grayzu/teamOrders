Template.resultsByCategory.helpers({ 
    'productsbycategory': function() {
        Meteor.subscribe("Products.search");
        
        var name = FlowRouter.getParam('categoryName');
        var value = FlowRouter.getParam('categoryValue');
        
        switch(name){
          case 'Brand':
            return Products.find({Brand: `${value}`}).fetch(); 

          case 'Family':
            return Products.find({Family: `${value}`}).fetch(); 

          case 'Category':
            return Products.find({Category: `${value}`}).fetch(); 
            
          case 'RideType':
            return Products.find({RidingType: `${value}`}).fetch(); 
          
          case Default:
            return null;
        }
    }, 
}); 