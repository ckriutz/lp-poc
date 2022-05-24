import React from "react"
import Counter from "./counter"
import JSONData from "../../src/data/unionCountyData.json"

//var nmbrs = 1033;

const RegistrationData = (props) => (
  <div className="registrationdata">
    Registered Libertarians in Union County: <Counter>{JSONData.Libertarians}</Counter>
  </div>
)

export default RegistrationData