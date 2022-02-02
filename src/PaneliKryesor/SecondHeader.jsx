import React from 'react';
import './SecondHeader.css'
import { BsPlusCircle } from "react-icons/bs";
import { BsCloudArrowUpFill } from "react-icons/bs";
import { BsBoxArrowDownLeft } from "react-icons/bs";
function SecondHeader() {
  return <div>
      <div className='main-logo'>
          <h1>Paneli Kryesor</h1>
      </div>
     <div className='buttons'>
       <button className='btn btn-success'>

   <BsPlusCircle /> Porosi e re 
      
       </button>
       <button className='btn btn-light ms-2 shadow-sm p-3 bg-body rounded'>
       <BsCloudArrowUpFill/>  Importo Porosite
       </button>
       <i class="fa-regular fa-circle-plus"></i>
       <button className='btn btn-warning ms-auto shadow-2'>
        <BsBoxArrowDownLeft /> Prano Porosi
       </button>
     </div>
     
  </div>;
}

export default SecondHeader;
