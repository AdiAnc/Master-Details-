const DAL = require('../Dal/userDal')

const getUser = async (id) => {
let resp = await DAL.getUser(id);
let user = resp.data
return user
}


const getUsers = async () => {
    let resp = await DAL.getUsers();
    let user = resp.data
    return user.map(x => {

        return {name : x.name, id : x.id }
    })
    }

    module.exports ={getUser,getUsers}

    // let resp = getUsers()
    // resp.then(data => console.log(data))

    // let res = getUser(1)
// res.then((data)=>console.log(data)).catch(function () {
//     console.log("Promise Rejected");
// });
