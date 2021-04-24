import styled from "styled-components";
import Productivia from "./Productivia";

import Tales from "./Tales";

const ProjectsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 15.5rem;
  align-items: flex-start;
  margin-top: 13rem;

  @media screen and (max-width: 1173px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }

  h1 {
    display: flex;
    color: var(--darkPrimary);
    align-self: flex-end;
    justify-content: flex-end;
    font-weight: 700;
    font-size: 6.4rem;
    width: 100%;

    @media screen and (max-width: 1173px) {
      font-size: 5rem;
      justify-content: center;
      align-self: center;
      margin-bottom: 7.5rem;
    }

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

    @media screen and (max-width: 768px) {
      margin: 7.5rem 0 12.5rem 0;
    }

    &:before {
      content: "<0.3.5>";
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
        0.3.<span>Projects</span>
      </h1>
      <Tales />
      <div className="separator"></div>
      <Productivia />
    </ProjectsWrapper>
  );
};

export default Projects;
