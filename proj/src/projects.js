import React from "react";
import Card from "react-bootstrap/Card";
const Projects = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <br></br>
      <div className="cardStyle">
        <Card>
          <Card.Header as="h5">Personal</Card.Header>
          <Card.Body>
            <Card.Title>Resunet</Card.Title>
            <Card.Text>c#</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="cardStyle">
        <Card >
          <Card.Header as="h5">Personal</Card.Header>
          <Card.Body>
            <Card.Title>moneyTrack</Card.Title>
            <Card.Text>Track server income, tips plus hourly</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="cardStyle">
        <Card >
          <Card.Header as="h5">Personal</Card.Header>
          <Card.Body>
            <Card.Title>Random meal generator</Card.Title>
            <Card.Text>Generate proteins, garnishes, or full meals </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="cardStyle">
        <Card >
          <Card.Header as="h5">College</Card.Header>
          <Card.Body>
            <Card.Title>WordFinder</Card.Title>
            <Card.Text>FInal React based Dictionary and Thesaurus App working with API</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="cardStyle">
        <Card >
          <Card.Header as="h5">College</Card.Header>
          <Card.Body>
            <Card.Title>Movies-n-me</Card.Title>
            <Card.Text>ReactNative final project working with IMDB API to search and save movies</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="cardStyle">
        <Card >
          <Card.Header as="h5">College</Card.Header>
          <Card.Body>
            <Card.Title>Pizza Assignment</Card.Title>
            <Card.Text>Interactive project on JavaFX. Choose pizza toppings, size, quantity</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
