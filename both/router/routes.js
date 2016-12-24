FlowRouter.route('/',{
    action:function(){
        FlowLayout.render('layout',{sidebar:'sidebar',main:'home',cart:'cart'});
    }
});

FlowRouter.route('/category/:categoryName',{
    subscriptions:function(params){
        console.log("SUBSCRIPTIONS",params);
        // Make sure subscription exits
    },  
    triggersEnter:function(params){
        console.log("ENTER",params);
        // Check that user is logged in
    },
    triggersExit:function(params){
        console.log("EXIT",params);
        // Check that there is no unsaved data
    },
    action:function(){
        FlowLayout.render('layout',{sidebar:'sidebar',main:'category',cart:'cart'});
    }
});