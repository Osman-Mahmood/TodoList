import React from 'react';
import './LeftBox.css'
import { BsFolderFill } from "react-icons/bs";
import { BsFunnelFill } from "react-icons/bs";
import { BsFillForwardFill } from "react-icons/bs";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { BsListUl } from "react-icons/bs";
import { BsFillPrinterFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { BsPeaceFill } from "react-icons/bs";

export default function LeftBox() {
  return <div>
  
  <div className='main-box'>
     <div className='parent'>
         <div className='child'>
             <p><b>Porosi ne degrim</b> <BsFunnelFill className='ms-3'/>  <BsFolderFill className='ms-1'/> </p>
             
             <p className='ms-auto'><b>Te gjithe </b></p>
         </div>
         <div className='lists d-flex'>
             <p className='list-item'>KODI POD</p>
             <p className='list-item'>STATUSI</p>
             <p className='list-item'>LLOJI I POROSISE</p>
             <p className='list-item'>PICKUP TEK</p>
             <p className='list-item'>ORIGJINA</p>
             <p className='list-item'>DESTINACIONI</p>
             <p className='list-item'>MARRESI</p>
         </div>
         <div className='center-data'>
             <p>No Rows To Show</p>
         </div>
         <div Name="scroll"></div>
         <div className='footer d-flex'>
             <p className='ms-auto'>0deri ne ngo 0</p>
             <p className=''>Fadga 1 nga 0</p>
         </div>
         
     </div>
     
     <div className='parent-box'>
        <div className='child-box'>
            <p><BsFillForwardFill /> <b> Derguesi</b></p>
            {/* <p className='ms-auto'>Te gjithe</p> */}
           
  </div>
  <form className='ms-3 mt-5'>
  <div className="form-row d-flex">
    <div className="form-group col-md-6 ">
      <label for="inputEmail4">SUBJEKTI/EMRI</label>
      <input type="email" className="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-5 ms-2">
      <label for="inputPassword4">KONTAKT</label>
      <input type="password" className="form-control" id="inputPassword4" />
    </div>
    
  </div>
  
  <div className="form-row d-flex mt-3">
    <div className="form-group col-md-4">
      <label for="inputCity">SHETI</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4 ms-3">
      <label for="inputState">QYTETI</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-3 ms-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
    
  </div>
  <div className="form-group mt-3">
    <label for="inputAddress">RRUGA/FSHATI</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="form-row d-flex mt-3">
    <div className="form-group col-md-4">
      <label for="inputCity">EMAIL</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4 ms-3">
      <label for="inputState">CELULAR</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-3 ms-2">
      <label for="inputZip">TELEFON</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
    
  </div>
</form>
  
    </div>
    <div className='parent-box'>
        <div className='child-box'>
            <p><BsFillEnvelopeOpenFill/><b> Marresi</b></p>
        </div>
        <form>
  <div className="form-row d-flex ms-3 mt-5">
    <div className="form-group col-md-6">
      <label for="inputEmail4">SUBJEKTI/EMRI</label>
      <input type="email" className="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-5 ms-3">
      <label for="inputPassword4">KONTAKT</label>
      <input type="password" className="form-control" id="inputPassword4"  />
    </div>
    
  </div>
  
  <div className="form-row d-flex ml-3 ms-3 mt-3">
    <div className="form-group col-md-4">
      <label for="inputCity">SHTETI</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4 ms-3">
      <label for="inputState">QYTETI</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-3 ms-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
    
  </div>
  <div className="form-group ms-3 mt-3">
    <label for="inputAddress">RRUGA/FSHATI</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div className="form-row d-flex ms-3 mt-3">
    <div className="form-group col-md-4">
      <label for="inputCity">E-MAIL</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4 ms-3">
      <label for="inputState">CELULAR</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-3 ms-2">
      <label for="inputZip">TELEFON</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
    
  </div>
</form>
    </div>

</div>
<div className='main-box'>
<div className='parent'>
         <div className='child'>
             <p><b>Porosi te reja</b> <BsFunnelFill className='ms-3'/>  <BsFolderFill className='ms-1'/></p>
             <p className='ms-auto'><b>Te gjithe:0</b></p>
         </div>
         <div className='lists d-flex'>
             <p className='list-item'>KODI POD</p>
             <p className='list-item'>STATUSI</p>
             <p className='list-item'>LLOJI I POROSISE</p>
             <p className='list-item'>PICKUP TEK</p>
             <p className='list-item'>ORIGJINA</p>
             <p className='list-item'>DESTINACIONI</p>
             <p className='list-item'>MARRESI</p>
         </div>
         <div className='center-data'>
             <p>No Rows To Show</p>
         </div>
         <div class="scroll"></div>
         <div className='footer d-flex'>
             <p className='ms-auto'>0deri ne ngo 0</p>
             <p className=''>Fadga 1 nga 0</p>
         </div>
         
     </div>
     <div className='forth-table'>
         <div className='child'>
             <p className='ms-5 mt-2'><BsListUl/><b> Detaje Porosie</b></p>
            
         </div>
         <form className='ms-2'>
  <div className="form-row d-flex">
    <div className="form-group col-md-3">
      <label for="inputEmail4">PESHA (KG)</label>
      <input type="email" className="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-3">
      <label for="inputPassword4">COPE</label>
      <input type="password" className="form-control" id="inputPassword4"  />
    </div>
    <p className='ms-2'>LLOJI SHERBIMIT<br/><b>DERGUESI ME KREDI</b></p>
    <p className='ms-5 mb-0'>LLOJI PAKETES <br/>
    <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label className="form-check-label" for="flexRadioDefault1"> PAKO </label>
</div>

{/* <!-- Default checked radio --> */}
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label className="form-check-label" for="flexRadioDefault2"> DOKUMENT </label>
</div>
</p>

  </div>
  <div className="form-row d-flex mt-0">
    <div className="form-group col-md-8">
      <label for="inputEmail4">NR.FEATURES TATIMORE</label>
      <input type="email" className="form-control" id="inputEmail4" />
    </div>
    <div className="form-group col-md-4">
      <label for="inputPassword4">KOD REF.</label>
      <input type="password" className="form-control" id="inputPassword4"  />
    </div>
    </div>
    <div className="form-group">
    <label for="exampleFormControlTextarea1">KOMENTE</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
  </div>
  </form>
  <div className='fifth-table mt-5 '>
         <div className='child'>
             <p className='ms-5 mt-2'><BsCurrencyDollar /><b> Pagesa</b></p>
            
         </div>
         <div className="form-row d-flex mt-0 ms-2">
    <div className="form-group col-md-7">
      <label for="inputEmail4">VL. K.PAGESES</label>
      <input type="email" className="form-control" id="inputEmail4" /><br /> <p className=''>VLERA SHERBIMIT</p>
    </div>
    
    <div className="form-group col-md-5">
      <label for="inputPassword4">MONEDHA</label>
      <input type="password" className="form-control" id="inputPassword4"  /><br/> <p className=''>MONEDHA<br/>0 LEK</p>
    </div>
    
    </div>
    <div className='six-table mb-5 '>
         <div className='child'>
             <p className='ms-5 mt-2'><b>Vempire</b></p>
            
         </div>
         <div className='table-content'>
             <p className='six-table-center d-flex'>
             <BsFillPrinterFill className='mt-1 ' />   <p className='ms-2'>Printo Porosine</p> 
             </p>
             <p className='six-table-center d-flex'>
               <BsPeaceFill className='mt-1 '/>  <p className='ms-2'>Gjurmo POD</p>
             </p>
             <p className='six-table-center d-flex'>
                <BsFillTrashFill className='mt-1 '/> <p className='ms-2'>Fshi</p>
             </p>
         </div>
      </div>
         </div>
         </div>
        

     </div>
    
</div>
}