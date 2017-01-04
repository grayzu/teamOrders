/* jshint esnext: true */
Template.header.helpers({
    'email': function(evt, tmpl){
        return Meteor.user().emails[0].address;
    }
});


Template.header.events({ 
    'click #searchBtn': function(e) { 
         search();
    }, 

    'keypress #searchTxt': function(e) {
        
        if(e.keyCode != 13) return;
        search();
    },
    'click #signout': function(evt) {
        Meteor.logout();
    }
}); 

function search() {
    var searchContent = $('#searchTxt');

    //Do nothing if search textbox is empty
    if(!searchContent || !searchContent.val()) return;

    // Otherwise 
    // Filter content by search text for any product containing the string.
    FlowRouter.go(`/search?term=${searchContent.val()}`);

    // clear content
    searchContent.val('');
}