import React from 'react';
import { Navbar,NavbarBrand,Nav,NavItem,NavbarToggler,Collapse,NavLink,NavbarText,Input,Button  } from 'reactstrap';
import {Row, Table, Col, Card,CardText, Modal, ModalHeader, ModalBody, ModalFooter, CardHeader, CardBody, clsx, UncontrolledTooltip } from 'reactstrap';
import { cardMode,textColor,Label,PerfectScrollbar,itemBgColor} from 'reactstrap';
export default (props) => {
  return (
    <div>
    <Navbar
      color="warning"
      expand="md"
      light
    >
      <NavbarBrand href="/">
       <Input style={{width:"600px" , marginLeft:"100px"}}/>
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck(){}} />
      <Collapse navbar>
        <Nav
          className="ms-auto"
          navbar
        >
          <NavItem>
            <NavLink href="/components/">
              AGJENISIA:
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">
             <b>TIRANA</b> 
            </NavLink>
          </NavItem>
          
        </Nav>
        <NavbarText>
          ROLI:
        </NavbarText>
        <NavbarText>
         <b>KLIENT</b> 
        </NavbarText>
       
      </Collapse>
    </Navbar>

  <h1 style={{marginLeft:"80px" , marginBottom:"20px"}}>Paneli Kryesor</h1>
  <Button
    color="warning"
    style={{marginLeft:"80px"}}
  >
    Porosi e re
  </Button>
  <Button
    color="#D0D7D4"
    style={{marginLeft:"20px"}}
  >
    Importo Porosite
  </Button>
  <Button 
  className='me-auto'
  color='warning'
  style={{float:"right"}}
  >
      Prano Porosi
  </Button>
  <Col md="12" sm="12" style={{display:"flex"}}>
  <Table className='mt-3' style={{marginLeft:"80px" , height:"400px" ,  width:"50%" , boxSizing:"border-box" , border:"1px solid #FFC107" ,}}>
  <thead>
    <tr style={{backgroundColor:"#FFC107" , height:"50px"}}>
     
      <th style={{display:"flex", height:"50px"}}>
        Porosi ne dergim
        <p className='ms-auto'>Te gjithe: 0</p>
      </th>
     
      
    </tr>
   
  </thead>
  <tbody>
  
  <tr style={{display:"flex", fontSize:"12px",alignItems:"center" , justifyContent:"center" , textAlign:"center", boxSizing:"border-box" , backgroundColor:"grey" }}>
                          <th style={{verticalAlign: 'bottom'}} className={'text-left'}>{'Kodi'}</th>
                          <th style={{verticalAlign: 'bottom'}} className={'text-left'}>{"Statusi"}</th>
                          <th style={{verticalAlign: 'bottom'}} className={'text-left'}>{ "Lloji i porosise"}</th>
                          <th style={{verticalAlign: 'bottom'}} className={'text-left'}>{ "Pickup tek"}</th>
                          <th style={{verticalAlign: 'bottom'}} className={'text-left'}>{"Marresi"}</th>
                          <th style={{verticalAlign: 'bottom'}} className={'text-left'}>{ "Ngarkuar per"}</th>
                          <th style={{verticalAlign: 'bottom'}} className={'text-left'}>{ "Data e krijimit"}</th>
                        </tr>
    <p style={{display:"flex", alignItems:"center" , justifyContent:"center" , textAlign:"center",width:"100%",height:"65%"}}>No Rows to show</p>
  
     <div className="scroll" style={{margin: "4px, 4px",
    padding: "3px",
    backgroundColor: "#E0E0E0",
    width: "400px",
    overflow: "auto",
    whiteSpace:"nowrap",
    boxSizing: "border-box",
    border: "1px solid lightgray",
    marginBottom:" 2px",
    borderRadius: "20px",
    marginLeft: "5px"}}></div>
    <div className='footer d-flex text-center' style={{backgroundColor:"#F3F6F6",boxSizing:"border-box", width: "100%",border:"1px solid lightgray" , height:"62px"}}>
             <p className='ms-auto' style={{boxSizing:"border-box",alignItems:"center",justifyContent:"center",textAlign:"center"}}>0deri ne ngo 0</p>
             <p className=''>Fadga 1 nga 0</p>
         </div>
        
  </tbody>

  
</Table>
{/* Derguesi table */}
<Card md="4" sm="12" xl="7" style={{width:"29%",height:"365px",marginLeft:"10px", marginTop:"15px",border:"1px solid #FFC107"}} >
<CardHeader className="pb-0 pt-0 d-flex justify-content-between bg-warning">
                  <div className="card-header--title py-2 font-size-lg font-weight-bold"><span style={{}} ><b>Derguesi</b></span></div>
                </CardHeader>
    <CardBody >
    <Row className='mb-2'>
                    <Col className='mb-2' sm="12" md="6" lg="12" xl="6"><Label className='pb-0' size="sm">{ "SUBJEKTI/EMRI"}</Label><Input size="sm" type="text" defaultValue={""} onChange={(e) => { }} placeholder="" /></Col>
                    <Col className='mb-2' sm="12" md="6" lg="12" xl="6" ><Label className='pb-0' size="sm">{"KONTAKT"}</Label><Input size="sm" type="text" defaultValue={""} onChange={(e) => { }} placeholder="" /></Col>
                  </Row>
                  
                  <div className="form-row d-flex ">
    <div className="form-group col-md-4 ">
      <Label size="sm" for="inputCity">SHETI</Label>
      <Input size="sm" type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4 ms-1">
      <Label size="sm" for="inputCity">QYTETI</Label>
      <Input size="sm" type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4 ms-1">
      <Label size="sm" for="inputCity">Zip</Label>
      <Input size="sm" type="text" className="form-control" id="inputCity" />
    </div>
    
    
  </div>
                  <Row className='mb-2'>
                    <Col sm="12" md="6" lg="12" xl="6"><Label  className='pb-0' size="sm">{ "RRUGA/FSHATI"}</Label><Input style={{width:"340px"}} size="sm" type="text" defaultValue={""} onChange={(e) => { }} placeholder="" /></Col></Row>
                 
<div className="form-row d-flex ">
    <div className="form-group col-md-4 ">
      <Label size="sm" for="inputCity">E-MAIL</Label>
      <Input size="sm" type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4 ms-1">
      <Label size="sm" for="inputCity">CELLULAR</Label>
      <Input size="sm" type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4 ms-1">
      <Label size="sm" for="inputCity">TELEFON</Label>
      <Input size="sm" type="text" className="form-control" id="inputCity" />
    </div>
    </div>
  
    
      
    </CardBody>
  </Card>
  {/* Marresi table */}

  <Card md="4" sm="12" xl="7" style={{width:"29%",height:"365px",marginLeft:"10px", marginTop:"15px",border:"1px solid #FFC107"}} >
<CardHeader className="pb-0 pt-0 d-flex justify-content-between bg-warning">
                  <div className="card-header--title py-2 font-size-lg font-weight-bold"><span style={{}} ><b>Marresi</b></span></div>
                </CardHeader>
    <CardBody >
    <Row className='mb-2'>
                    <Col className='mb-2' sm="12" md="6" lg="12" xl="6"><Label className='pb-0' size="sm">{ "SUBJEKTI/EMRI"}</Label><Input size="sm" type="text" defaultValue={""} onChange={(e) => { }} placeholder="" /></Col>
                    <Col className='mb-2' sm="12" md="6" lg="12" xl="6" ><Label className='pb-0' size="sm">{"KONTAKT"}</Label><Input size="sm" type="text" defaultValue={""} onChange={(e) => { }} placeholder="" /></Col>
                  </Row>
                  
                  <div className="form-row d-flex ">
    <div className="form-group col-md-4 ">
      <Label size="sm" for="inputCity">SHETI</Label>
      <Input size="sm" type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4 ms-1">
      <Label size="sm" for="inputCity">QYTETI</Label>
      <Input size="sm" type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4 ms-1">
      <Label size="sm" for="inputCity">Zip</Label>
      <Input size="sm" type="text" className="form-control" id="inputCity" />
    </div>
    
    
  </div>
                  <Row className='mb-2'>
                    <Col sm="12" md="6" lg="12" xl="6"><Label  className='pb-0' size="sm">{ "RRUGA/FSHATI"}</Label><Input style={{width:"340px"}} size="sm" type="text" defaultValue={""} onChange={(e) => { }} placeholder="" /></Col></Row>
                 
<div className="form-row d-flex ">
    <div className="form-group col-md-4 ">
      <Label size="sm" for="inputCity">E-MAIL</Label>
      <Input size="sm" type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4 ms-1">
      <Label size="sm" for="inputCity">CELLULAR</Label>
      <Input size="sm" type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4 ms-1">
      <Label size="sm" for="inputCity">TELEFON</Label>
      <Input size="sm" type="text" className="form-control" id="inputCity" />
    </div>
    </div>
  
    
      
    </CardBody>
  </Card>
  
            </Col>

{/* Poroso te Raja */}

          
<Table light className='mt-3' style={{marginLeft:"80px" , height:"400px" ,  width:"43%" , boxSizing:"border-box" , border:"1px solid #FFC107"}}>
  <thead>
    <tr style={{backgroundColor:"#FFC107" , height:"50px"}}>
     
      <th style={{display:"flex", height:"50px"}}>
        Porosi te reja
        <p className='ms-auto'>Te gjithe: 0</p>
      </th>
     
      
    </tr>
   
  </thead>
  <tbody>
  
  <tr style={{display:"flex", fontSize:"12px",alignItems:"center" , justifyContent:"center" , textAlign:"center", boxSizing:"border-box" , backgroundColor:"grey" }}>
                          <th style={{verticalAlign: 'bottom'}} className={'text-left'}>{'Kodi'}</th>
                          <th style={{verticalAlign: 'bottom'}} className={'text-left'}>{"Statusi"}</th>
                          <th style={{verticalAlign: 'bottom'}} className={'text-left'}>{ "Lloji i porosise"}</th>
                          <th style={{verticalAlign: 'bottom'}} className={'text-left'}>{ "Pickup tek"}</th>
                          <th style={{verticalAlign: 'bottom'}} className={'text-left'}>{"Marresi"}</th>
                          <th style={{verticalAlign: 'bottom'}} className={'text-left'}>{ "Ngarkuar per"}</th>
                          <th style={{verticalAlign: 'bottom'}} className={'text-left'}>{ "Data e krijimit"}</th>
                        </tr>
    <p style={{display:"flex", alignItems:"center" , justifyContent:"center" , textAlign:"center",width:"100%",height:"65%"}}>No Rows to show</p>
  
     <div className="scroll" style={{margin: "4px, 4px",
    padding: "3px",
    backgroundColor: "#E0E0E0",
    width: "400px",
    overflow: "auto",
    whiteSpace:"nowrap",
    boxSizing: "border-box",
    border: "1px solid lightgray",
    marginBottom:" 2px",
    borderRadius: "20px",
    marginLeft: "5px"}}></div>
    <div className='footer d-flex' style={{backgroundColor:"#F3F6F6",boxSizing:"border-box", width: "100%",border:"1px solid lightgray" , height:"62px"}}>
             <p className='ms-auto' style={{boxSizing:"border-box",alignItems:"center",justifyContent:"center",textAlign:"center"}}>0deri ne ngo 0</p>
             <p className=''>Fadga 1 nga 0</p>
         </div>
        
  </tbody>
</Table>


  </div>
  );
};


