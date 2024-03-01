import React from 'react';
import { Col } from 'react-bootstrap';


export const ProjectCard = ({ title, description, imgUrl, liveLink, codeLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="project-card">
        <img className="project-image" src={imgUrl} alt={title} />
        <div className="project-content">
          <div>
            <h4>{title}</h4>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <div className="project-links">
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <strong>View Project</strong>
              </a>
            )}
            {codeLink && (
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                <strong>View Code</strong>
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
