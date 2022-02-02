import React from "react";
import { useState } from "react";
import "./TodoList.css";
import { ToDoListItem } from "./ToDoListItem";
export const TodoList = () => {
    const [inputList,setInputList] = useState("");
    const [Items,setItems] = useState([]);

    const itemEvent = (event) =>{
        setInputList(event.target.value);
    };
    const listOfItems = () =>{
        setItems((oldItems) =>{
            return [...oldItems , inputList];
        });
        setInputList('');
    };
    const deleteItems = (id)=>{
        console.log("deleted");

        setItems((oldItems) =>{
            return oldItems.filter((arrElem,index)=>{
                 return index !== id;
            })
        })
    };
  return (
      
    <div>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a Items" value={inputList} onChange={itemEvent}/>
          <button onClick={listOfItems}>+</button>
          <ol>
           
           { Items.map((itemval , index) =>{
              return( <ToDoListItem key={index}
                id={index}
                 text = {itemval}
                 onSelect = {deleteItems}
               />
           )})}
          </ol>
        </div>
      </div>
    </div>
  );
};
