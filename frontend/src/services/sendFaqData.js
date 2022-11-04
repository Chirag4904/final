import axios from "axios"

function sendFaqData(schema) {

  axios.post("http://localhost:5000/api/create-faq-form", schema)
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error))
}

export default sendFaqData;