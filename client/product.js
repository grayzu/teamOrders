import { Blaze } from 'meteor/blaze';

Template.product.helpers({
    
})

Template.product.events({
    'click .AddtoCart': function(evt, tmpl){
        event.preventDefault();
        if(this.SKU){
            Meteor.call('Product.AddtoCart',this._id, this.SKU, this.Description, tmpl.$('.itemQty').val());
        }
        else {
            var body = `
                        <form class="form-inline">
                            <div class="form-group shockaddedinfo">
                                <label class="fullwidth"  for="model">Bike Model / Travel:</label>
                                <input type="text" class="form-control fullwidth" id="model">
                            </div>
                            <div class="form-group shockaddedinfo">
                                <label class="fullwidth" for="e2e">Eye-to-eye:</label>
                                <input type="text" class="form-control fullwidth" id="e2e">
                            </div>
                            <div class="form-group shockaddedinfo">
                                <label class="fullwidth" for="stroke">Stroke:</label>
                                <input type="text" class="form-control fullwidth" id="stroke">
                            </div>
                            <div class="form-group shockaddedinfo">
                                <label class="fullwidth" for="tune">Tune:</label>
                                <input type="text" class="form-control fullwidth" id="tune">
                            </div>
                            <div class="form-group shockaddedinfo">
                                <label class="fullwidth" for="airCan">Air can:</label>
                                <input type="text" class="form-control fullwidth" id="airCan">
                            </div>
                            <div class="form-group shockaddedinfo">
                                <label class="fullwidth" for="volumespacer">Volume spacers:</label>
                                <input type="text" class="form-control fullwidth" id="volumespacer">
                            </div>
                            <div class="form-group shockaddedinfo">
                                <label class="fullwidth" for="upperhardware">Upper hardware:</label>
                                <input type="text" class="form-control fullwidth" id="upperhardware">
                            </div>
                            <div class="form-group shockaddedinfo">
                                <label class="fullwidth" for="lowerhardware">Lower hardware:</label>
                                <input type="text" class="form-control fullwidth" id="lowerhardware">
                            </div>
                            <div class="form-group shockaddedinfo">
                                <label class="fullwidth" for="coilspring">Coil spring:</label>
                                <input type="text" class="form-control fullwidth" id="coilspring">
                            </div>
                            <div class="form-group shockaddedinfo">
                                <label class="fullwidth" for="leverageratio">Leverage ratio:</label>
                                <input type="text" class="form-control fullwidth" id="leverageratio">
                            </div>
                            <div class="form-group shockaddedinfo">
                                <label class="fullwidth" for="averageleverageratio">Average leverage ratio:</label>
                                <input type="text" class="form-control fullwidth" id="averageleverageratio">
                            </div>
                            <div class="form-group shockaddedinfo">
                                <label class="fullwidth" for="leverageratiosag">Leverage ratio sag:</label>
                                <input type="text" class="form-control fullwidth" id="leverageratiosag">
                            </div>
                        </form>            
            `
            Modal.show('genericModalDialog',{Title: 'Rear Shock Additional Details', AddtoCart: true, body: body, qty: tmpl.$('.itemQty').val(), data: tmpl.data});
        }
    },
    'click .desc-info': function(evt, tmpl){
        var body = `
            <div class="row">
                <div class="col-xs-6">
                    <img src="${this.ImageURI}" class="image-details">
                </div>
                <div class="col-xs-6 full-description">
                    ${this.Description}
                </div>
            </div>
        `;
        Modal.show('genericModalDialog',{Title: 'Product Information', body: body, data: tmpl.data});
    }
});