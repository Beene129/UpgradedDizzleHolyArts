import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";
import { Container,Row , Col } from "react-bootstrap";

function App() {
  const [pages] = useState([
    {
      name: "about\xA0Me",
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: "upcoming Events",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div >
      <Header />

      <main>
      

        <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <Container>
  <Row>
  
      
<Col md={5}>
        <Page currentPage={currentPage}></Page>
        </Col>
        </Row>      
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
