Template.sidebar.helpers({ 
    'brands': function() {
        Meteor.subscribe("filters");

        Brands = Filters.find({name:"Brands"}).fetch();
        if(Brands.length === 1) return Brands[0].values;
    },
    'families': function(){
        Meteor.subscribe("filters");

        Families = Filters.find({name:"Families"}).fetch();
        if(Families.length === 1) return Families[0].values;
    },
    'categories': function(){
        Meteor.subscribe("filters");

        Categories = Filters.find({name:"Categories"}).fetch();
        if(Categories.length === 1) return Categories[0].values;
    },
    // Fits filter not implemented
    // 'fits': function(){
    //     Fits = Filters.find({name:"Fits"}).fetch();
    //     if(Fits.length === 1) return Fits[0].values;
    // },
    'rideTypes': function(){
        Meteor.subscribe("filters");

        RideType = Filters.find({name:"RideTypes"}).fetch();
        if(RideType.length === 1) return RideType[0].values;
    }
}); 

Template.sidebar.events({ 
    'click .brandBtn': function(){
        FlowRouter.go(`/category/Brand/${this}`);
    },

    'click .familyBtn': function(){
        FlowRouter.go(`/category/Family/${this}`);
    },

    'click .categoryBtn': function(){
        FlowRouter.go(`/category/Category/${this}`);
    },

    'click .rideTypeBtn': function(){
        FlowRouter.go(`/category/RideType/${this}`);
    }
}); 
