import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import vite from "../assets/img/vite.svg";
import project1 from '../assets/img/project1.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import screenshot1 from '../assets/img/screenshot1.png'

export const Projects = () => {

  const projects = [
    {
      title: "AI Content generator",
      description: "Using OpenAI's GPT-3 Davinci model and Django ",
      imgUrl: project1,
      liveLink: "#",
      codeLink : 'https://github.com/Agnes-Kalunda/AI-Content-Generator'
    },
    {
      title: "AI Image generator",
      description: "Using OpenAI's GPT-3 text DALL-E API  and ReactJs",
      imgUrl: project1,
      liveLink: "#",
      codeLink : '#'
    },
    {
      title: "Fashion E-Commerce",
      description: "Built on Django framework and Postgres database",
      imgUrl: project1,
      liveLink: "#",
      codeLink : '#'
    },
   
  ];

  // machine learning card
  const MLCard = () => (
    <Col md={4}>
     
      <div className="card">
        <img src={screenshot1} className="card-img-top" alt="ML Project" />
        <div className="card-body">
          <h5 className="card-title">Your ML Project Title</h5>
          <p className="card-text">Description of your ML project.</p>
          <a href="#" className="btn btn-primary">
            View Details
          </a>
        </div>
      </div>
    </Col>
  );

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> JavaScript (ReactJs) for dynamic front-end experiences and Python (Django, FastAPI, Flask) for robust back-end solutions. Currently delving into machine learning with Python, I'm excited about applying AI to real-world challenges.

Beyond coding, I share insights through technical blogs, breaking down complex concepts. Explore my projects, read my blogs, and let's connect for tech discussions or collaborations!




.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">ML</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"> Writing</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                   
                   <MLCard/>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
    <div style={{ display: 'block', textAlign: 'left' }}>
        <p>
            I've worked on diverse technical projects in software development, web applications, and machine learning. Proficient in Python, Django, FastAPI, Flask, and React.js, I simplify complex tech concepts for technical and non-technical audiences. My expertise in machine learning allows me to explain intricate algorithms in a user-friendly manner.
        </p>
        <p>
            Some of my writing samples include:
            <a href="https://www.civo.com/learn/building-a-front-end-on-civo-ml-using-django-with-civo-kfaas" target="_blank">Building a front end using Django with KubeFlow</a>,   <a href="https://medium.com/@AgnesMbiti/all-about-container-security-81697bdd0e04" target="_blank">Best practices for container security,</a>                   <a href="https://medium.com/@AgnesMbiti/deploying-machine-learning-models-on-django-b51fd0b53593" target="_blank">Deploying Machine learning models on Django,</a>           and some more <a href="https://medium.com/@AgnesMbiti"> here </a>.
        </p>
    </div>
</Tab.Pane>



                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={vite}></img>
    </section>
  )
}