Template.product.events({
    'click .AddtoCart': function(evt, tmpl){
        
        //Do not call AddtoCart for items without SKUs. First present dialog where they will fill in required details. 
        // call AddtoCart from the new dialog.

        Meteor.call('Product.AddtoCart',this.SKU, tmpl.$('.itemQty').val());
    }
});