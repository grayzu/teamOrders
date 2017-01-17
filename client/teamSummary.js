Meteor.subscribe('orderSummary');
Meteor.subscribe('productcatalog');

Template.teamSummary.helpers({
    orderedProducts: function(){
        return OrderSummary.find();
    },
    teamTotal: function(){
        var orderSummary = OrderSummary.find().fetch();
        var len = orderSummary.length;
        var grandTotal = 0;

        for(i = 0; i < len; i++){
            var price = parseInt( ProductCatalog.findOne({Description: orderSummary[i].Description}).Price);
            var qty = parseFloat(orderSummary[i].Qty);
            grandTotal += price * qty;
            
        }
        return grandTotal;
    }
});

Template.teamSummary.rendered = function(evt, tmpl){
    if(!this.rendered){
        Meteor.call('Items.ordered');
    }
};