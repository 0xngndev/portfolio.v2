import styled from "styled-components";
import Productivia from "./Productivia";

import Tales from "./Tales";

const ProjectsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 15.5rem;
  align-items: flex-start;

  h1 {
    display: flex;
    color: var(--darkPrimary);
    align-self: flex-end;
    justify-content: flex-end;
    font-weight: 700;
    font-size: 6.4rem;
    width: 100%;

    span {
      color: #fff;
    }
  }

  .separator {
    display: flex;
    align-self: flex-end;
    height: 2px;
    background-color: var(--darkPrimary);
    margin: 7.5rem 0;
    width: 50%;

    &:before {
      content: "<0.2.5>";
      position: relative;
      color: var(--darkPrimary);
      font-weight: 400;
      font-size: 1.5rem;
      font-family: "Roboto Mono";
    }
  }
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <h1>
        0.2.<span>Projects</span>
      </h1>
      <Tales />
      <div className="separator"></div>
      <Productivia />
    </ProjectsWrapper>
  );
};

export default Projects;
