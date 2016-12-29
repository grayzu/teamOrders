/* jshint esnext: true */
// General client side code
import { Meteor } from 'meteor/meteor';

Template.registerHelper('currency', function(value){
    return '$' +  Number(value).toFixed(2); 
});

Template.registerHelper('truncate', function(inputString, len){
    var newString = inputString.substring(0,len) + '...';
    return new Spacebars.SafeString(newString);
});