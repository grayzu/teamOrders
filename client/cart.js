/* jshint esnext: true */

Template.cart.helpers({
    cartItems: function(){
        return Cart.find();
    },
    buttonState: function(){
        if(Session.equals('cartDirty', false)){
            console.log(`button should be disabled`);
            return 'disabled';
        }
        else{
            console.log(`button should be enabled`);
            return '';
        }   
    }
});

Template.cart.events({
    'click #delFromCart': function(){
        Meteor.call('Product.RemovefromCart',this._id);
        // Session.set('cartDirty',true);
    },
    'click .checkoutBtn': function(){
        Meteor.call('Order.summary');
    }
});

Template.cart.onRendered(function(){
    this.subscribe('cart', Meteor.userId());
    this.subscribe('orders');
    
    // Tracker.autorun(function(){
        // if(cartHandle.ready && orderHandle.ready){
            // var myOrder = Orders.find().fetch(); // when called from client this will only return my orders.
            // var myCart = Cart.find().fetch();
            // var state = false;
            
            // if(myOrder.length === 0 && myCart.length > 0){
            //     state = true;
            //     console.log(`No Orders found or Cart is empty.`);
            // }
            // else if (myOrder.length === 1 && !isCartContentInOrder(myCart, myOrder)){
            //     state = true;
            //     console.log(`A single order exists and all cart items are in the order.`);
            // }
            // Session.set('cartDirty', state);
        // }
    // });
    
    
});

var isCartContentInOrder = function(cart, order){
    var cartContentsInOrder = true;
    var orderItems = order.shift().itemSummary;
    
    var cartLen = cart.length;
    var orderLen = orderItems.length;

    if(orderLen !== cartLen){
        cartContentsInOrder = false;
        console.log(`Number of cart items does not match number of order items.`);
    }
    else {
        for (i = 0; i < cartLen && cartContentsInOrder; i++){
            var orderItem = checkItemExists(cart[i].Descrption, orderItems);
            if( orderItem !== undefined){
                if(parseInt(orderItem.Qty) !== parseInt(cart[i].qty)){
                    cartContentsInOrder = false;
                    console.log(`Cart and order quantities do not match.`);
                }
            }
            else {
                cartContentsInOrder = false;
                console.log(`Cart item '${cart[i].Description}' not found in order.`);
            }
        }
    }

    return cartContentsInOrder;
};

function checkItemExists(description, orderItems){
    var orderLen = orderItems.length;
    for(j = 0; j < orderLen; j++){        
        if(orderItems[j].Description === description){
            console.log(`Cart item found in order.`);
            return orderItems[j];
        }         
    }
}

