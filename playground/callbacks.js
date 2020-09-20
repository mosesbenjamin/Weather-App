var getUser = (id, callback)=>{
    var user = {
        id: id,
        name: 'Mavewrick'
    };

    setTimeout(()=>{
        callback(user);
    }, 3000);
};

getUser(29, (userObject)=>{
    console.log(userObject)
});