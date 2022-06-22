import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/Beene129"
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/allen-beene-07401968"
    },
    {
      name: "fab fa-facebook",
      link: "https://www.facebook.com/dizzleholyarts"
    },
    {
      name: "fab fa-instagram",
      link: "https://www.instagram.com/explore/tags/dizzleholyarts/"
    }
    
   
  ]

  return (
    
      <Container fluid className='footer'>
        <Row>
          <Col  sm={4} md={4} lg={4} xl={4} >
          <p className=''>This website was made by Allen K. Beene</p>
          </Col>

  <Col sm>
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
        </Col>
        </Row>
        </Container>
   
  );
}

export default Footer;