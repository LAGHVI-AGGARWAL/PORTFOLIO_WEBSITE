import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix from "../../Assets/Projects/netflix clone.png";
// import emotion from "../../Assets/Projects/emotion.png";
import temperatureConvertor from "../../Assets/Projects/temperature convertor.png";
import snakegame from "../../Assets/Projects/snake game.png";
// import suicide from "../../Assets/Projects/suicide.png";
import fooddelivery from "../../Assets/Projects/food delivery app.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fooddelivery}
              isBlog={false}
              title="Food Delivery App"
              description="Developed a user-friendly, responsive food delivery application using the MERN stack (MongoDB, Express.js, React.js, Node.js) that streamlines the online ordering process.
              Users can only place orders after successful login, ensuring authorized usage.Comprehensive search functionality to locate desired restaurants and dishes. 
              Detailed menus with item descriptions and prices for informed decision-making. Dynamic cart that updates in real-time as users add, remove, or adjust quantities of items."
              ghLink="https://github.com/LAGHVI-AGGARWAL/Food_Delivery_App"
              // demoLink="https://blogs.soumya-jit
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snakegame}
              isBlog={false}
              title="Snake Game App"
              description="Developed a Snake Game App using React, where the game ends when the snake collides with itself or the walls. The snake's length increases by 1 and speed by 20 when it eats the food.
To play the game, the user uses the arrow keys to move the snake around the board. The goal of the game is to eat as much food as possible without colliding with the walls or itself. The game ends when the snake collides with itself or the walls."
              ghLink="https://github.com/LAGHVI-AGGARWAL/SNAKE_GAME_APP"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={temperatureConvertor}
              isBlog={false}
              title="Temperature Convertor"
              description="Developed a user-friendly temperature converter web application using HTML, CSS, and JavaScript. This application allows users to seamlessly convert temperatures between Celsius (°C), Fahrenheit (°F), and Kelvin (K). Clean and user-friendly design with clear labels for input and output fields.
              Users can enter temperature values and select the degree they're converting from.  Displays the converted temperature in the appropriate unit, providing clear feedback.
              Ensures usability across different devices and screen sizes."
              ghLink="https://github.com/LAGHVI-AGGARWAL/BHARAT_INTERN/tree/main/TEMPERATURE_CONVERTOR"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Landing Page Clone"
              description="Created a functional replica of the Netflix landing page using HTML, CSS, and JavaScript. 
              Ensuring the layout adapts seamlessly to various screen sizes (desktop, mobile, tablet) for an optimal user experience. 
              Implementing a user-friendly layout and visual design inspired by the Netflix platform."
              ghLink="https://github.com/LAGHVI-AGGARWAL/BHARAT_INTERN/tree/main/NETFLIX_HOMEPAGE_CLONE"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
