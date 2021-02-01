import React from 'react'


const ToDoList = (props) => {

    return (
        <>
        <div className="todo-sytle">
        <li> {props.showItems} 
          {/*Getting the props from App.js */}
          <i className="fa fa-times" aria-hidden="true"
        /*Using callback function to get the id from props. */
        onClick= {() => {
            props.onSelect(props.id);
        }}
        />
        </li>  
        </div>
        </>
    )   
}

export default ToDoList;
