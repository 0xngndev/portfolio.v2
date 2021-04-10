import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";

const DivProjectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-right: 2rem;
  margin-bottom: 15rem;

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
`;

const Tales = () => {
  return (
    <DivProjectWrapper>
      <div className="div-projects-sh">
        <h1 className="project-title">
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
          <Link href="/">
            <FiArrowRightCircle />
          </Link>
        </div>
      </div>
    </DivProjectWrapper>
  );
};

export default Tales;
