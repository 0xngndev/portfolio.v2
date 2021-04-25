import styled from "styled-components";

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15.5rem;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
  }

  h1 {
    color: var(--darkPrimary);
    font-weight: 700;
    font-size: 6.4rem;
    align-self: center;
    margin-bottom: 0;
    span {
      color: #fff;
    }
    @media screen and (max-width: 768px) {
      font-size: 5rem;
    }
  }

  .div-spacer {
    width: 60%;
    align-self: center;
    height: 2px;
    background-color: var(--darkPrimary);
    margin: 2rem 0;
  }

  p {
    font-weight: 400;
    font-size: 1.5rem;
    color: var(--darkPrimary);
    span {
      font-weight: 400;
      font-size: 1.5rem;
      color: #fff;

      @media screen and (max-width: 768px) {
        font-size: 1.4rem;
      }
    }

    @media screen and (max-width: 768px) {
      font-size: 1.4rem;
      padding: 0 9rem;
    }
  }

  .p-first {
    color: #fff;
    margin-bottom: 0;
    padding-bottom: 0;
    line-height: 0rem;
    padding-top: 1.4rem;
  }

  .p-second {
    margin-bottom: 0;
    color: var(--darkPrimary);
  }
`;

const About = () => {
  return (
    <AboutWrapper id="about">
      <h1>
        0.2.<span>About</span>
      </h1>
      <div className="div-spacer"></div>
      <p className="p-first">ATTRIBUTES</p>
      <p className="p-second">===========</p>
      <p>
        {`>> `}
        <span>
          My name is Guido Nasini and I'm a self-taught Fullstack Developer from
          Argentina
        </span>
      </p>
      <p>
        {`>> `}
        <span>
          The idea of turning ideas into fully functional applications is what
          got me into coding and, from then on, I knew this was what I wanted to
          do.
        </span>
      </p>
      <p>
        {`>> `}
        <span>
          I have experience with React, Nextjs, Node, Express, MongoDB, and
          GraphQL.
        </span>
      </p>
      <p>
        {`>> `}
        <span>
          My current focus is set on expanding my knowledge of AWS, SQL
          databases, and the overall architecture of applications. Security is
          something I want to do a deep dive on in the near future.
        </span>
      </p>
    </AboutWrapper>
  );
};

export default About;
