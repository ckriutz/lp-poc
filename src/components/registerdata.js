import React from "react"
import Counter from "./counter"

var nmbrs = 1033;

fetch('https://libertyfunctions.azurewebsites.net/api/RegisteredAPIFunction')
.then(response => response.json())
.then((bodyData) => {
  // jsonData is parsed json object received from url
  console.log(bodyData);
  nmbrs = bodyData;
});

const RegistrationData = (props) => (
  <div className="registrationdata">
    Registered Libertarians in Union County: <Counter>{nmbrs}</Counter>
  </div>
)

export default RegistrationData