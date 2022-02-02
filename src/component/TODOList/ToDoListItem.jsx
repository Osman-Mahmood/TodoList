import React from 'react';

export const ToDoListItem = (props) => {

 

  return  <div>
      <div className='todo_style'>
          <i className = "fa fa-times" aria-hidden="true"
            onClick={()=>{
                props.onSelect(props.id);
            }}
          />
         <li>{props.text}</li>;
         </div>
  </div>;
  
};
