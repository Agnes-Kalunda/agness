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
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: vite,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: vite,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: vite,
    // },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                      <p>My exposure to web development technologies, such as Python and JavaScript, and modern frameworks like Django, Flask, FastAPI and React, has equipped me to seamlessly integrate machine learning models into web applications. I am committed to creating user-friendly, responsive, and data-driven interfaces that provide actionable insights to both users and stakeholders.</p>
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