/* jshint esnext: true */
// Router file

FlowRouter.route('/',{
    action: function(){
        FlowLayout.render('layout',{sidebar:'sidebar',main:'home',cart:'cart'});
    }
});

FlowRouter.route('/category/:categoryName/:categoryValue',{
    action: function(params){
        FlowLayout.render('layout',{sidebar:'sidebar',main:'resultsByCategory',cart:'cart'});
    }
});

FlowRouter.route('/search',{
    action: function(params, queryParams){
        FlowLayout.render('layout',{sidebar:'sidebar',main:'resultsBySearch',cart:'cart'});
    }
});

FlowRouter.route('/myOrders',{
    action: function(params, queryParams){
        FlowLayout.render('layout',{sidebar:'',main:'myOrders',cart:''});
    }
});

FlowRouter.route('/memberOrders',{
    action: function(params, queryParams){
        if(Roles.userIsInRole(Meteor.userId(),'View-Reports')){
            FlowLayout.render('layout',{sidebar:'',main:'memberOrders',cart:''});
        }
    }
});

FlowRouter.route('/teamSummary',{
    action: function(params, queryParams){
        if(Roles.userIsInRole(Meteor.userId(),'View-Reports')){
            FlowLayout.render('layout',{main:'teamSummary'});
        }
    }
});
