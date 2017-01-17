/* jshint esnext: true */
// General client side code
import { Meteor } from 'meteor/meteor';

Template.registerHelper('currency', function(value){
    var sValue = Number(value).toFixed(2)
    
    var sRegExp = new RegExp('(-?[0-9]+)([0-9]{3})'); 
    while(sRegExp.test(sValue)) {
        sValue = sValue.replace(sRegExp, '$1,$2');
    }

    return '$ ' + sValue; 
});

Template.registerHelper('truncate', function(inputString, len){
    var ellipses = inputString.length < len ? '': '...';
    var newString = inputString.substring(0,len) + ellipses;
    return new Spacebars.SafeString(newString);
});

Template.registerHelper('total', function(price, qty){
    return parseFloat(price) * parseInt(qty);
});