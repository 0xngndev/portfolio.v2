import styled from "styled-components";

import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";

const ProjectsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 15.5rem;
  align-items: flex-start;

  h1 {
    display: block;

    color: var(--darkPrimary);
    align-self: flex-end;
    font-weight: 700;
    font-size: 6.4rem;

    span {
      color: #fff;
    }
  }
  div {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
  }

  .div-projects-fh {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .div-img {
      border: 2px solid var(--darkPrimary);
      width: 70rem;
      height: 38rem;
      flex: 1;
    }

    .div-svg {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      svg {
        padding-top: 2rem;
        padding-left: 3rem;
        fill: var(--darkPrimary);
        height: 35px;
        width: 35px;
        align-self: flex-end;
      }
    }
  }

  .div-projects-sh {
    display: flex;
    flex-direction: column;
    flex: 1;

    h1 {
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
      width: 160%;
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
`;

const Projects = () => {
  return (
    <ProjectsWrapper>
      <h1>
        0.2.<span>Projects</span>
      </h1>
      <div>
        <div className="div-projects-sh">
          <h1>
            {`() => 500`}
            <span>Tales</span>
          </h1>
          <h2>Social Media App</h2>
          <div className="div-fake">
            <h3>
              500Tales is a social media app dedicated to the art of short
              fiction. Users can share tales up to 500 words long, follow other
              authors, comment on the stories of others and much more.
            </h3>
          </div>
          <p>
            {`<`}
            <span>tech stack</span>
            {`>`}
          </p>
          <div className="div-tech-stack">
            <button>GRAPHQL</button>
            <button>NEXTJS</button>
            <button>MONGODB</button>
            <button>NODE</button>
          </div>
        </div>
        <div className="div-projects-fh">
          <div className="div-img"></div>
          <div className="div-svg">
            <FaGithub />
            <BiLinkExternal />
            <FiArrowRightCircle />
          </div>
        </div>
      </div>
    </ProjectsWrapper>
  );
};

export default Projects;
