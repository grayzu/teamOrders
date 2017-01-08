/* jshint esnext: true */
Meteor.subscribe('cart', Meteor.userId());

Template.cart.helpers({
    cartItems: function(){
        return Cart.find();
    }
});

Template.cart.events({
    'click #delFromCart': function(){
        Meteor.call('Product.RemovefromCart',this._id);
    },
    'click .checkoutBtn': function(){
        Meteor.call('Order.summary');
    }
    // Disable Finalize button when order is saved until cart is changed.
});

