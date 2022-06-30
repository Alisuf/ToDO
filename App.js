import React, {useState} from "react";
import Header from "./component/Header";
import Form1 from "./component/Form1";
import List1 from "./component/List1";
import './App.css';

const App = () => {
  const [input, setInput] = useState("");
  const [ToDo, setToDo] = useState([]);
  const [editToDo, setEditToDo] = useState(null);
  console.log(setEditToDo)
  return (
   <div className="container">
    <div className="app-wrapper">
      <div>
        <Header />
      </div>
      <div>
        <Form1  
        setEditToDo1={setEditToDo}
        input={input}
        setInput={setInput}
        ToDo={ToDo}
        setToDo={setToDo}
        editToDo={editToDo}
        
        />
      </div>
      <div>
        { <List1
        ToDo={ToDo}
        setToDo={setToDo}
        setEditToDo={setEditToDo}
        />}
      </div>
    </div>
   </div>
  );
};

export default App;
