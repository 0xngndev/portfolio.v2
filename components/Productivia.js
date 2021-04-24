import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";

const DivProjectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;

  margin-bottom: 15rem;

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  .div-projects-fh {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1.5;

    @media screen and (max-width: 768px) {
      padding: 0 5rem;
      height: 350px;
    }

    .div-img {
      position: relative;
      display: flex;
      position: relative;
      z-index: 1;
      flex: 1;
      width: 100%;
      height: 100%;

      &:before {
        top: -10px;
        left: 30px;
        border: 2px solid var(--darkPrimary);

        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
      }

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

        @media screen and (max-width: 768px) {
          background: #101234;
        }
      }

      &:hover {
        transition: 0.5s;
        :after {
          opacity: 0;
        }
      }
      img {
        object-fit: cover;
        object-position: center center;
        box-shadow: var(--bs);
      }
    }

    .div-svg {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      cursor: pointer;

      svg {
        padding-top: 2rem;
        padding-right: 3rem;
        fill: var(--darkPrimary);
        height: 35px;
        width: 35px;
        align-self: flex-start;
        transition: 0.3s;
        border: none;

        @media screen and (max-width: 768px) {
          height: 30px;
          width: 30px;
        }

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

    @media screen and (max-width: 768px) {
      position: absolute;
      height: 100%;
    }

    .project-title {
      display: block;
      font-weight: 700;
      font-size: 2.5rem;
      text-align: end;
      margin: 0;
      margin-bottom: 1rem;
      line-height: 1;

      @media screen and (max-width: 768px) {
        display: flex;
        position: absolute;
        top: -12%;
        left: 30%;
        transform: translate(-50%, -50%);
        font-size: 2rem;
        z-index: 3;
      }
    }

    h2 {
      display: block;
      color: var(--darkSecondary);
      font-weight: 300;
      font-size: 2rem;
      margin: 0;
      text-align: end;
      margin-bottom: 1rem;

      @media screen and (max-width: 768px) {
        display: none;
      }
    }

    .div-fake {
      position: relative;
      padding: 1.5rem;
      right: calc(30% + 2.5rem);
      z-index: 2;
      width: 130%;
      background: #101234;
      box-shadow: var(--bs);

      @media screen and (max-width: 768px) {
        width: 80%;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -65%);
        z-index: 3;
      }

      h3 {
        display: block;
        color: #fff;
        font-weight: 400;
        font-size: 1.5rem;

        @media screen and (max-width: 768px) {
          font-size: 1.25rem;
        }
      }
    }
    p {
      display: block;
      text-align: end;
      font-size: 1.75rem;

      color: var(--darkPrimary);

      @media screen and (max-width: 768px) {
        position: absolute;
        bottom: 27.5%;
        left: 50%;
        color: #fff;
        padding: 0 1rem;
        font-size: 1.5rem;
        background: var(--darkPrimary);
        transform: translate(-50%, -50%);
        z-index: 3;
        box-shadow: var(--bs);
      }

      span {
        color: #fff;
      }
    }
    .div-tech-stack {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-end;

      @media screen and (max-width: 768px) {
        position: absolute;
        bottom: 15%;
        left: 50%;
        transform: translate(-50%, -50%);

        z-index: 3;
      }

      button {
        outline: none;
        border: none;
        background: transparent;
        padding: 1rem;
        color: #fff;
        border: 2px solid var(--darkPrimary);
        font-size: 1.5rem;
        margin-left: 2rem;

        @media screen and (max-width: 768px) {
          background: #101234;
          font-size: 1.25rem;
          margin-right: 1rem;
          border: none;
          box-shadow: var(--bs);
        }
      }
    }
  }
`;

const Productivia = () => {
  return (
    <DivProjectWrapper>
      <div className="div-projects-sh">
        <h1 className="project-title">
          {`() => Pro`}
          <span>ductivia</span>
        </h1>
        <h2>Productivity App</h2>
        <div className="div-fake">
          <h3>
            Productivia is a productivity-oriented app focused on maximizing
            productivity by providing the users with tools such as flashcards,
            to-do lists, and pomodoro clocks in a clean and cluter-free
            environment.
          </h3>
        </div>
        <p>
          {`<`}
          <span>tech stack</span>
          {`>`}
        </p>
        <div className="div-tech-stack">
          <button>REACT</button>
          <button>REDUX</button>
          <button>FIREBASE</button>
        </div>
      </div>
      <div className="div-projects-fh">
        <div className="div-img">
          <Image src="/assets/sloth.jpg" alt="sloth" layout="fill" />
        </div>
        <div className="div-svg">
          <Link href="https://github.com/nasgui">
            <FaGithub />
          </Link>
          <Link href="/">
            <BiLinkExternal />
          </Link>
          {/* <Link href="/projects/productivia">
            <FiArrowRightCircle />
          </Link> */}
        </div>
      </div>
    </DivProjectWrapper>
  );
};

export default Productivia;
