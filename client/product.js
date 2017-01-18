import { Blaze } from 'meteor/blaze';

Template.product.events({
    'click .AddtoCart': function(evt, tmpl){
        event.preventDefault();
        if(this.SKU){
            Meteor.call('Product.AddtoCart',this._id, this.SKU, this.Description, tmpl.$('.itemQty').val());
        }
        else {
            var body = `
                        //not used
            `
            Modal.show('genericModalDialog',{Title: 'Rear Shock Additional Details', AddtoCart: true, body: body, qty: tmpl.$('.itemQty').val(), data: tmpl.data});
        }

        // Session.set('cartDirty', true);
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