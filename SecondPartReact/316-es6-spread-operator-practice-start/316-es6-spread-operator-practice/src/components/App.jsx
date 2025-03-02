import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState(""); 
  const [arrayText, setArrayText] = useState([]); 

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };


  //This function 
  const handleAddButtonClick = () => {
    if (inputText.trim() !== "") { 
      setArrayText([...arrayText, inputText]); 
      setInputText(""); 
    }
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={inputText} onChange={handleInputChange} />
        <button onClick={handleAddButtonClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {arrayText.map((item, index) => (
            <li key={index}>{item}</li> 
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
