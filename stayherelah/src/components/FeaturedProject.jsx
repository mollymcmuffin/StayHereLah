import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mature from "../images/home/mature.png";

const Project = styled.div`
  height: 80%;
  border: none;
  width: 20vw;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #ffe7cc;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: 0.5s ease-out;
  &:hover {
    color: white;
    background: url(${mature});
    background-size: cover;
    transition: 0.5s ease-out;
  }
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
`;

const Title = styled.h2`
  text-align: center;
  color: black;
`;

const FeaturedProject = ({ project, id, category }) => {
  return (
    <Project>
      <ProjectLink to={`/btoprojects/${category}/${id}`}>
        <Title>{project}</Title>
      </ProjectLink>
    </Project>
  );
};

export default FeaturedProject;
