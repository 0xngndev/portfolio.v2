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
  .div-project-wrapper {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    padding-right: 2rem;

    .div-projects-fh {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      flex: 1.5;

      .div-img {
        display: flex;
        position: relative;
        z-index: 1;
        flex: 1;
        width: 100%;
        height: 100%;

        &:after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: var(--darkPrimary);
          opacity: 0.8;
          transition: 0.5s;
        }

        &:hover {
          transition: 0.5s;
          :after {
            opacity: 0;
          }
        }
      }

      .div-svg {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        cursor: pointer;

        svg {
          padding-top: 2rem;
          padding-left: 3rem;
          fill: var(--darkPrimary);
          height: 35px;
          width: 35px;
          align-self: flex-end;
          transition: 0.3s;
          border: none;

          &:hover {
            transition: 0.3s;
            fill: #fff;
          }
        }
      }
    }

    .div-projects-sh {
      display: flex;
      flex-direction: column;
      flex: 1;

      .project-title {
        display: block;
        font-weight: 700;
        font-size: 2.5rem;
        align-self: flex-start;
        margin: 0;
        margin-bottom: 1rem;
        line-height: 1;
      }

      h2 {
        display: block;
        color: var(--darkSecondary);
        font-weight: 300;
        font-size: 2rem;
        margin: 0;
        margin-bottom: 1rem;
      }

      .div-fake {
        position: relative;
        padding: 1.5rem;
        z-index: 2;
        width: 130%;
        background: #101234;
        box-shadow: var(--bs);

        h3 {
          display: block;
          color: #fff;
          font-weight: 400;
          font-size: 1.5rem;
        }
      }
      p {
        display: block;

        color: var(--darkPrimary);

        span {
          color: #fff;
        }
      }
      .div-tech-stack {
        display: flex;
        flex-direction: row;

        button {
          outline: none;
          border: none;
          background: transparent;
          padding: 1rem;
          color: #fff;
          border: 2px solid var(--darkPrimary);
          font-size: 1.5rem;
          margin-right: 2rem;
        }
      }
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
    </ProjectsWrapper>
  );
};

export default Projects;
