const {v4: uuidv4} = require("uuid");
const users =[
{
    id: uuidv4(),
    username: 'tanjila khatun',
    email: 'tanjila@gmail.com'
},
{
    id: uuidv4(),
    username:'bithi khatun',
    email: 'bithi@gmail.com'
}
];

module.exports = users;