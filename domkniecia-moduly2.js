function User(){
    var username, password;

    function doLogin(user, pw) {
        username = user;
        password = pw;

        //jakis tam kod odpowiedzilany za usługę logowania
    }

    var publicAPI = {
        login: doLogin
    };

    return publicAPI;
}

var fred = User()
fred.login("fred", "12Battery34!");