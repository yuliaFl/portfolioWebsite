import React from "react";
import Card from "react-bootstrap/Card";
import "./projects.css";

const Projects = () => {
  return (
    <div id="Projects" className="projects">
      <div className="Projects-Header">
        <h1>My Projects</h1>
          <h4>
            Project I want to highlight, you can find more of my work on my{" "}
            <a href="https://github.com/yuliaFl">github</a>.
          </h4>
      </div>
      <br></br>
      <div className="cardStyle">
        <Card>
          <Card.Header as="h4">Personal</Card.Header>
          <Card.Body>
            <a href="https://github.com/yuliaFl/RandomDishGenerator_Web">
              <Card.Title>Random meal generator</Card.Title>
            </a>
            <Card.Text className="cardText">
              A fun side project I started when I got tired of deciding what to
              cook. It helps generate ideas for proteins, garnishes, or whole
              meals. You can also add your favorite foods and sort them into
              categories. Project is being done on both React and ReactNative
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="cardStyle">
        <Card>
          <Card.Header as="h4">College</Card.Header>
          <Card.Body>
            <a href="https://github.com/yuliaFl/CPAN213_Movies-n-Me">
              <Card.Title>Movies-n-me</Card.Title>
            </a>
            <Card.Text className="cardText">
              As a team built a movie searching ReactNative app. User is greater
              with a logo, and a loading bar, moving onto homepage with an
              option of register, login in, or guest. Once logged in, has option
              to search a movie or view saved movies. Searching a movie is done
              by fetching an IMDB API. Saved movies are stored with redux
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="cardStyle">
        <Card>
          <Card.Header as="h4">College</Card.Header>
          <Card.Body>
            <a href="https://github.com/yuliaFl/Python_Humber/tree/main/bookstore">
              <Card.Title>Bookstore</Card.Title>
            </a>
            <Card.Text className="cardText">
              Python Django project, involving working with routes, links,
              templates, inheritance, models, POST, and GET. Admin access is
              provided to view all profiles and control book data. Users have
              the option to register and log in. Once logged in, they can edit,
              delete, and add books. If not registered or logged in, they can
              only view the book list
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="cardStyle">
        <Card>
          <Card.Header as="h4">College</Card.Header>
          <Card.Body>
            <a href="https://github.com/yuliaFl/CPAN144_WordFinder">
              <Card.Title>WordFinder</Card.Title>
            </a>
            <Card.Text className="cardText">
              As a team built a customized dictionary and thesaurus React app.
              Given an input, the user can search up a word which returns a wide
              range of data to provide a comprehensive result about the
              word.Uses Merriam-Webster's Dictionary and Thesaurus
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="cardStyle">
        <Card>
          <Card.Header as="h4">College</Card.Header>
          <Card.Body>
            <a href="https://github.com/yuliaFl/SpringBootFinal">
              <Card.Title>Distribution Center</Card.Title>
            </a>
            <Card.Text className="cardText">
              With a partner built a distribution center as a final project.
              Worked with SpringBoot, Java, Html, CSS, Bootstrap, PostgreSQL.
              User has a choice to login as an admin, guest, manager. Admin
              login has different aspects available. There is an option to add
              items, delete, list all centers, search by brand and name. Option
              to check for items at a distribution center, and with available
              items find the closest centers
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Projects;

/*
      <div className="cardStyle">
        <Card>
          <Card.Header as="h5">Personal</Card.Header>
          <Card.Body>
            <Card.Title>moneyTrack</Card.Title>
            <Card.Text>
              A start of a ReactNative project to track and store server income
            </Card.Text>
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
      */
