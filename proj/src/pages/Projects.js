import React from "react";
import Card from "react-bootstrap/Card";
import "../styles/Projects.css";

function Projects() {
  return (
    <div id='projects' className="proj-background">
      <div className="proj-content">
        <div className="title">Projects</div>
        <div className="proj-description">
          Projects I want to highlight, you can find more of my work on my{" "}
          <a href="https://github.com/yuliaFl">github</a>.
        </div>
        <br></br>
        <div className="cards">
          <div className="cardStyle">
            <Card>
              <Card.Header as="h4">Freelance</Card.Header>
              <Card.Body>
                <a href="https://github.com/yuliaFl/handyMan_React">
                  <Card.Title>FixIt Handyman Solutions</Card.Title>
                </a>
                <br></br>
                <a href="http://www.fixiths.ca/">
                  <Card.Title>Fixiths.ca</Card.Title>
                </a>
                <Card.Text className="cardText">
                  This handyman service website, built using React, offers a
                  seamless and user-friendly experience. Key features include:
                  Intuitive navigation bar for easy access to different
                  sections. Engaging carousel to showcase reviews. Buttons that
                  adjust their position dynamically as the screen size changes
                  and change color on hover for better interactivity. Dropdown
                  buttons for easy access to additional options. The entire site
                  adapts to different phone and screen sizes, ensuring a
                  consistent and responsive user experience.
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
                  As a team built a movie searching ReactNative app. User is
                  greater with a logo, and a loading bar, moving onto homepage
                  with an option of register, login in, or guest. Once logged
                  in, has option to search a movie or view saved movies.
                  Searching a movie is done by fetching an IMDB API. Saved
                  movies are stored with redux
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
                  As a team built a customized dictionary and thesaurus React
                  app. Given an input, the user can search up a word which
                  returns a wide range of data to provide a comprehensive result
                  about the word.Uses Merriam-Webster's Dictionary and Thesaurus
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
                  provided to view all profiles and control book data. Users
                  have the option to register and log in. Once logged in, they
                  can edit, delete, and add books. If not registered or logged
                  in, they can only view the book list
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="cardStyle">
            <Card>
              <Card.Header as="h4">Personal</Card.Header>
              <Card.Body>
                <a href="https://github.com/yuliaFl/RandomDishGenerator_Web">
                  <Card.Title>Random meal generator</Card.Title>
                </a>
                <Card.Text className="cardText">
                  A fun side project I started when I got tired of deciding what
                  to cook. It helps generate ideas for proteins, garnishes, or
                  whole meals. You can also add your favorite foods and sort
                  them into categories. Project is being done on both React and
                  ReactNative
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
