import React, { useState, useEffect } from "react"
import employees from "../employees.json"

function Homepage() {
  const [employeeState, setEmployeeState] = useState({
    employeeArray: employees,
  })

  useEffect(() => {
    function shuffle(a) {
      var j, x, i;
      for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }
    var randomOrder = shuffle(employees)

    setEmployeeState({
      ...employeeState,
      employeeArray: randomOrder
    })
  }, [employeeState])


  const handleBtnClick = () => {
    console.log("you got clicked!")
    var sorted = employeeState.employeeArray.sort(function (a, b) {
      if (a.name < b.name) { return -1; }
      if (a.name > b.name) { return 1; }
      return 0;
    })

    setEmployeeState({
      ...employeeState,
      employeeArray: sorted
    })
  }

  console.log(employeeState.employeeArray)
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => handleBtnClick()} className="btn btn-success mx-3">
        Alphabetize
            </button>
      {employeeState.employeeArray.map((singleEmp) => {
        console.log(singleEmp)
        return (
          <div>
            <p>{singleEmp.name}</p>
            <img src={singleEmp.image} alt="employee pic"></img>
            <p>{singleEmp.occupation}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Homepage