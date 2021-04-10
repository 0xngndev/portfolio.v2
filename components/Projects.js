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
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <h1>
        0.2.<span>Projects</span>
      </h1>
      <Tales />
      <Productivia />
    </ProjectsWrapper>
  );
};

export default Projects;
