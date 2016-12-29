/* jshint esnext: true */
Template.header.events({ 
    'click #searchBtn': function(e) { 
         search();
    }, 

    'keypress #searchTxt': function(e) {
        
        if(e.keyCode != 13) return;
        search();
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