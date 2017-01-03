Template.genericModalDialog.helpers({

});

Template.genericModalDialog.events({
    'click .AddtoCart': function(evt, tmpl){
        //validate all fields are not empty
        var bikeModel = tmpl.$('#model').val();
        var e2e = tmpl.$('#e2e').val();
        var stroke = tmpl.$('#stroke').val();
        var tune = tmpl.$('#tune').val();
        var airCan = tmpl.$('#airCan').val();
        var volumespacer = tmpl.$('#volumespacer').val();
        var upperhardware = tmpl.$('#upperhardware').val();
        var lowerhardware = tmpl.$('#lowerhardware').val();
        var coilspring = tmpl.$('#coilspring').val();
        var leverageratio = tmpl.$('#leverageratio').val();
        var averageleverageratio = tmpl.$('#averageleverageratio').val();
        var leverageratiosag = tmpl.$('#leverageratiosag').val();

        var additionalData = {bikeModel: bikeModel, e2e: e2e, stroke: stroke, tune: tune, airCan: airCan, volumespacer: volumespacer, upperhardware: upperhardware, lowerhardware: lowerhardware, coilspring: coilspring, leverageratio: leverageratio, averageleverageratio: averageleverageratio, leverageratiosag: leverageratiosag};
    
        if(bikeModel.length === 0 || e2e.length === 0 || stroke.length === 0 || tune.length === 0 || airCan.length === 0 || volumespacer.length === 0 || upperhardware.length === 0 || lowerhardware.length === 0 || coilspring.length === 0 || leverageratio.length === 0 || averageleverageratio.length === 0 | leverageratiosag.length === 0) {
            alert('Please fill in all of the fields in the template.');
        }
        else{
            var itemData = tmpl.data.data;
            // console.log(itemData);
            // console.log(tmpl.data.qty);
            Meteor.call('Product.AddtoCart',itemData._id, itemData.SKU, itemData.Description, tmpl.data.qty, additionalData);
            Modal.hide();
        }
        
    }
});