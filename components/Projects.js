import styled from "styled-components";

import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";

const Projects = () => {
  return (
    <ProjectsWrapper>
      <h1>
        0.2.<span>Projects</span>
      </h1>
      <div>
        <div className="div-projects-fh">
          <div></div>
          <FaGithub />
          <BiLinkExternal />
          <FiArrowRightCircle />
        </div>
        <div className="div-projects-sh">
          <h1>
            {`() => 500`}
            <span>Tales</span>
          </h1>
          <h2>Social Media App</h2>
          <div className="div-description">
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
      </div>
    </ProjectsWrapper>
  );
};

export default Projects;
