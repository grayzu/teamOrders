/* jshint esnext: true */
Template.resultsBySearch.helpers({ 
    'productsbysearch' : function() { 
        
        var searchTerm = FlowRouter.getQueryParam('term');

        Meteor.subscribe("Products.search", searchTerm);
        return Products.find({});
    } 
}); 