module.exports = async function getDatas(){
    const axios = require("axios");

    await axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {console.log(res.data);})
    .catch((err) => {console.error(err);})
}