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
