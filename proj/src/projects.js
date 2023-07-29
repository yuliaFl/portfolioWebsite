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
            <Card.Title>moneyTrack</Card.Title>
            <Card.Text>
              Personal ReactNative project to track and store server income.
              Will save input data to MongoDB.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="cardStyle">
        <Card>
          <Card.Header as="h5">Personal</Card.Header>
          <Card.Body>
            <Card.Title>Random meal generator</Card.Title>
            <Card.Text>Generate proteins, garnishes, or full meals </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="cardStyle">
        <Card>
          <Card.Header as="h5">Personal</Card.Header>
          <Card.Body>
            <Card.Title>Resunet</Card.Title>
            <Card.Text>Personal project to learn C# and .NET</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="cardStyle">
        <Card>
          <Card.Header as="h5">College</Card.Header>
          <Card.Body>
            <Card.Title>Movies-n-me</Card.Title>
            <Card.Text>
              As a team built a movie searching ReactNative app. User is greater
              with a logo, and a loading bar, moving onto homepage with an
              option of register, login in, or guest. Once logged in, has option
              to search a movie or view saved movies. Searching a movie is done
              by fetching an IMDB API. Saved movies are stored with redux.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="cardStyle">
        <Card>
          <Card.Header as="h5">College</Card.Header>
          <Card.Body>
            <Card.Title>WordFinder</Card.Title>
            <Card.Text>
              As a team built a customized dictionary and thesaurus React app.
              Given an input, the user can search up a word which returns a wide
              range of data to provide a comprehensive result about the
              word.Uses Merriam-Webster's Dictionary and Thesaurus{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="cardStyle">
        <Card>
          <Card.Header as="h5">College</Card.Header>
          <Card.Body>
            <Card.Title>Pizza Assignment</Card.Title>
            <Card.Text>
              Interactive project on JavaFX. Choose pizza toppings, size,
              quantity
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="cardStyle">
        <Card>
          <Card.Header as="h5">College</Card.Header>
          <Card.Body>
            <Card.Title>Distribution Center</Card.Title>
            <Card.Text>
              With a partner built a distribution center as a final project.
              Worked with SpringBoot, Java, Html, CSS, Bootstrap, PostgreSQL.
              User has a choice to login as an admin, guest, manager. Admin
              login has different aspects available. There is an option to add
              items, delete, list all centers, search by brand and name. Option
              to check for items at a distribution center, and with available
              items find the closest centers.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
