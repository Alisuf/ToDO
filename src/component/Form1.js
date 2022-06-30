import React, {useEffect} from 'react';
import {v4 as uuidv4} from "uuid";
const Form1 = (props) => {
    const  {input, setInput, ToDo, setToDo, editToDo, setEditTodo1}=props;
  
    const updateToDO = (title, id, completed) =>{
        const newTodo = ToDo.map((ToDo) =>
            ToDo.id === id ? {title, id, completed} : ToDo
        );
        setToDo(newTodo);
        console.log(props)
        setEditTodo1("");
    }
    useEffect(() =>{
        if(editToDo){
            setInput(editToDo.title);
        } else{
            setInput("")
        }
    }, [setInput, editToDo]);
    const onInputChange =  (event) =>{
        setInput(event.target.value);
    };

    const onFormSubmit =(event) =>{
        event.preventDefault();
        if(!editToDo){
            setToDo([{id: uuidv4(), title: input, completed: false},...ToDo]);
            setInput("");
        }else{
            updateToDO(input, editToDo.id, editToDo.completed)
        }
        
    };
    return(

        <form onSubmit={onFormSubmit}>
            <input 
            type="text"
             placeholder="Enter a To do..." 
             className="task-input" 
             value={input} 
             required
             onChange={onInputChange}
             />
            <button className="button-add" type="submit">
               {editToDo ? "OK" : "Add"}
            </button>
        </form>
    );
};

export default Form1;