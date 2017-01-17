Template.signin.events({
    'submit .signin': function(evt){
        var email = evt.target.email.value;
        var password = evt.target.password.value;
        
        evt.preventDefault();

        Meteor.loginWithPassword(email, password, function(err){
            if(!err){
                FlowRouter.go('/');
            }
            else {
                alert('Incorrect username or password. Pleae try again.');
            }
        });
    },

    'submit .register': function(evt){
        var email = evt.target.email.value;
        var password = evt.target.password.value;
        var name = evt.target.fullname.value;

        evt.preventDefault();

        if(email.length > 0 && password.length > 0 && name.length >0){
            Accounts.createUser({
                email: email,
                password: password,
                profile: {
                    fullName: name
                }
            });

            FlowRouter.go('/');
        }
        else {
            alert('Please fill in all of the fields.');
        }
        
    },
    'click #signinTab': function(evt){
        evt.stopPropagation();//preventDefault();
        $('#signinTab').tab('show');
    },
    'click #registerTab': function(evt){
        evt.stopPropagation();//preventDefault();
        $('#registerTab').tab('show');
    },
});