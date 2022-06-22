import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import UpcomingEvents from '../UpcomingEvents';
import Project from '../Project';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Container from 'react-bootstrap/esm/Container';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'upcomingEvents':
        return <UpcomingEvents />;
      default:
        return <About/>;
    }
  };

  return (
    <Container className="pageContent">
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <PageContent>{renderPage()}</PageContent>
    </Container>
  );
}
export default Page;
