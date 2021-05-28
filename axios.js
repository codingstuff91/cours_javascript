import axios from "axios"
const URL = "http://localhost:8080/cours_javascript/db.json"
axios.get(URL)
  .then((response) => {
    // handle success
    console.log(response);
  })
  .catch((error)=>{
      console.log(error)
  })