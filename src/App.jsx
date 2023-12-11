import { useState } from "react";
import Header from "./Components/Header/Header"
import Result from "./Components/Result/Result";
import UserInput from "./Components/UserInput/UserInput"

function App() {
  const [userData, setUserData] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10
  });
  const isInputValid = userData.duration>=1;
  const handleChange = (identifier, event) => {
    setUserData(prev=>{
        return {
            ...prev,
            [identifier] : +event.target.value
        }
    })
  }
  
  return (
    <div>
        <Header />
        <UserInput userData={userData} onChange={handleChange}/>
        {isInputValid && <Result userData={userData}/> }
        {!isInputValid && <p className="center">Enter Duration greater than Zero</p> }
    </div>
  )
}

export default App
