Meteor.subscribe('orders');

Template.checkout.helpers({
    order: function(){
        return Orders.findOne();
    }

});

Template.checkout.events({
    //Add event and functions
    'click .orderDisagree': function(){
        Meteor.call('Order.remove');
    }
});

Template.checkout.onCreated(function(){
    // Add function logic
    
});

Template.checkout.onRendered(function(){
    // Add function logic
    //console.log('' + Cart.find({}).fetch());
    
});

Template.checkout.onDestroyed(function(){
    // Add function logic
    
});