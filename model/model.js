/* jshint esnext: true */
// Client + Server code
Products = new Mongo.Collection('products');

ProductCatalog = new Mongo.Collection('displayproducts');

Filters = new Mongo.Collection('filters');

Cart = new Mongo.Collection('cart');

Orders = new Mongo.Collection('orders');
Orders.helpers({
    Owner(){
        return Meteor.users.findOne({_id: this.userId});
    }
});

OrderSummary = new Mongo.Collection('orderSummary');
OrderSummary.helpers({
    SKU(){
        return ProductCatalog.findOne({Description: this.Description}).SKU;
    },
    price(){
        return ProductCatalog.findOne({Description: this.Description}).Price;
    }
});