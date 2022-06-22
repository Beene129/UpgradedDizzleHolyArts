import Alert from 'react-bootstrap/Alert';
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Maintenance.css"


const Maintenance = () => {
   
  return (
   
    <div className=" d-flex align-items-center justify-content-center" >

    
        <Alert variant="success">
          <Alert.Heading>Under Maintenance</Alert.Heading>
          <p>
           If you'd like to take a sneak peak, check out the link below!
          </p>
          <hr />
          <div>
            <Button variant="outline-success">
              Click Here
            </Button>
          </div>
        </Alert>
  
        </div>
    
  
  )
}

export default Maintenance;