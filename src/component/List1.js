import React from "react"
import "../App.css"
const List1 = ({ ToDo, setToDo, setEditToDo }) => {
    console.log(ToDo)

    const handleComplete = (ToDo) => {
        setToDo(
            ToDo.map((item) => {
                if (item.id ===ToDo.id) {
                    return { ...item, completed: !item.completed};
                }
                return item;
            })
        );
    };
    const handleEdit = ({ id }) => {
        const findToDo = ToDo.find(( ToDo) => ToDo.id === id);
        setEditToDo(findToDo);
    };
    const handleDelete = ({ id }) => {
        setToDo(ToDo.filter((ToDo) => ToDo.id !==id));
        
    }
    return (
        <div>
            {ToDo.map( (ToDo) => (
        <li className="list-items" Key={ToDo.id}>
            <input
            type="text"
            value={ToDo.title}
            className=  {'list $(ToDo.completed ? "complete" : " ")' }
            onChange={(event) => event.preventDefault()}
            />
            <div>
                <button className="button-complete task-button" onClick={() => handleComplete(ToDo)}>
                    <i className="fa fa-check-circle"></i>
                </button>
                <button className="button-edit task-button"onClick={() => handleEdit(ToDo)}>
                    <i className="fa fa-edit"></i>
                </button>
                <button className="button-delete task-button" onClick={() => handleDelete(ToDo)}>
                    <i className="fa fa-trash"></i>
                </button>
            </div>
    </li>
            ))}
            </div>
    );
            };
;
export default List1;

