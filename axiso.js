const axios = require('axios').default;

axios
    .get('http://localhost:5000/v1/travelgroup/read')
    .then(res => console.log(res))
    .catch(err => console.log(err));


const getGroups = () => {
    const { data } = await axios.get('http://localhost:5000/v1/travelgroup/read')
    console.log(data);
}
