/* jshint esnext: true */
// General client side code
import { Meteor } from 'meteor/meteor';

Template.registerHelper('currency', function(value){
    return '$ ' +  Number(value).toFixed(2); 
});

Template.registerHelper('truncate', function(inputString, len){
    var ellipses = inputString.length < len ? '': '...';
    var newString = inputString.substring(0,len) + ellipses;
    return new Spacebars.SafeString(newString);
});