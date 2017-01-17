Template.memberOrders.helpers({
    'allOrders': function(){
        return Orders.find({});
    }
});

Template.memberOrders.onCreated(function(){
        this.subscribe('orders',true);
        this.subscribe('allUsers',true);
});

Template.myOrders.helpers({
    'allOrders': function(){
        return Orders.find({});
    }
});

Template.memberOrders.onCreated(function(){
        this.subscribe('orders',true);
});