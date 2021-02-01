import React, { useState } from "react";
import ToDoList from "./ToDoList";


const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  //get the value of targated event and storing in inputList state.
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  //Here oldItems = data stored in items state.
  //...oldItems(use of spread function) and "inputList" => data entered by the user in the field.
  const listItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    //Clears the input field after button click
    setInputList("");
  };

  const deleteItems = (id) => {
    console.log("deleted");

    /*if the index value is not equal to the value
     of id then return in the form of array.*/
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add new items"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listItems}> Add </button>

          <ol>
            {/* maping the array to render it. */}
            {/* {items.map((itemval) => {
                <li>{itemval}</li>
            }) */}

            {/*Passing props to the ToDoList component*/}
            {items.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  showItems={itemval}
                  onSelect={deleteItems} //which list item has user selected
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
