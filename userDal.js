const axios = require('axios')

const getUsers = () => {
return axios.get('https://jsonplaceholder.typicode.com/users')

}

const getUser = (id) => {
    return axios.get("https://jsonplaceholder.typicode.com/users/" + id)
    }

   module.exports = {getUsers, getUser}

//     let res = getUser(1)
//     res.then((data)=>console.log(data)).catch(function () {
//         console.log("Promise Rejected");
//    });
    
