import React, { useEffect,useState } from "react";
import TaskContract from "./contracts/TaskContract.json";
import getWeb3 from "./getWeb3";
const TruffleContract = require("@truffle/contract");

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState();

  useEffect(() => {
    (async()=>{
      await window.ethereum
      const taskContract = TruffleContract(TaskContract);
      taskContract.setProvider(window.ethereum);
      const tasks = await taskContract.deployed()
      setTasks(tasks)
      console.log(await tasks.tasks(0))
      
    })();
  },[])

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleButtonClick = async (e) => {
    setInputValue("")
  }

  return (
    <>
    <div className="App">
      <h1>Wallet Info</h1>
      <input onChange={handleInputChange} value={inputValue}/>
      <button onClick={handleButtonClick}>Crear Tarea</button>
    </div>
    </>
  )
}

export default App;
