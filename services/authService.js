exports.login = (username, password) => {

    if (username === "admin" && password === "admin@123") {
        return true;
    }

    else {
        throw "Invalid Credentials";
    }

}

