// created and exported function
module.exports = async function getDatas(){
    const axios = require("axios"); // first install axios, after you should import axios for use it

    await axios.get("https://jsonplaceholder.typicode.com/posts") // fetch jsonplaceholder api
    .then((res) => {console.log(res.data);})
    .catch((err) => {console.error(err);})
}
