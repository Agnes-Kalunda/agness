
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import python from '../assets/img/python.jpeg';
import react from '../assets/img/react.png';
import flask from '../assets/img/flask.jpeg';
import js from '../assets/img/js.png';
import fastapi from '../assets/img/fastapi.png';
import postgres from '../assets/img/postgres.jpeg';
import django from '../assets/img/django.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>
Discover the tools that enable my proficiency in creating dynamic and user-friendly front-end experiences, coupled with expertise in building robust back-end solutions.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                {/* <img src={js} alt="Image" /> */}
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                {/* <img src={react} alt="Image" /> */}
                                <h5>ReactJs</h5>
                            </div>
                            <div className="item">
                                {/* <img src={python} alt="Image" /> */}
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                {/* <img src={django} alt="Image" /> */}
                                <h5>Django</h5>
                            </div>
                            <div className="item">
                                {/* <img src={fastapi} alt="Image" /> */}
                                <h5>FastAPI</h5>
                            </div>
                            <div className="item">
                                {/* <img src={flask} alt="Image" /> */}
                                <h5>Flask</h5>
                            </div>
                            <div className="item">
                                {/* <img src={postgres} alt="Image" /> */}
                                <h5>Postgres</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}