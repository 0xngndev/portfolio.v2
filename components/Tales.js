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

  @media screen and (max-width: 1173px) {
    padding: 0;
  }

  .div-projects-fh {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex: 1.5;

    @media screen and (max-width: 1173px) {
      padding: 0 5rem;
      height: 350px;
    }

    .div-img {
      position: relative;
      display: flex;

      z-index: 1;
      flex: 1;
      width: 100%;
      height: 100%;

      &:before {
        top: 10px;
        left: -30px;
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

        @media screen and (max-width: 1173px) {
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
      justify-content: flex-end;
      cursor: pointer;

      a {
        display: flex;
        justify-content: flex-end;
        align-self: flex-end;
        padding-top: 0.5rem;

        svg {
          padding-top: 2rem;
          padding-left: 3rem;
          fill: var(--darkPrimary);
          height: 35px;
          width: 35px;
          align-self: flex-end;
          transition: 0.3s;
          border: none;

          @media screen and (max-width: 1173px) {
            padding-top: 3rem;
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
  }

  .div-projects-sh {
    display: flex;
    flex-direction: column;
    flex: 1;

    @media screen and (max-width: 1173px) {
      position: absolute;
      height: 100%;
    }

    .project-title {
      display: block;
      font-weight: 700;
      font-size: 2.5rem;
      align-self: flex-start;
      margin: 0;
      margin-bottom: 1rem;
      line-height: 1;

      @media screen and (max-width: 1173px) {
        display: flex;
        position: absolute;
        top: -10%;
        left: 50%;
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
      margin-bottom: 1rem;

      @media screen and (max-width: 1173px) {
        display: none;
      }
    }

    .div-fake {
      position: relative;
      padding: 1.5rem;
      z-index: 2;
      width: 130%;
      background: #101234;
      box-shadow: var(--bs);

      @media screen and (max-width: 1173px) {
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

        @media screen and (max-width: 1173px) {
          font-size: 1.25rem;
        }
      }
    }
    p {
      display: block;
      font-size: 1.75rem;
      color: var(--darkPrimary);
      @media screen and (max-width: 1173px) {
        position: absolute;
        bottom: 28.5%;
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

      @media screen and (max-width: 1173px) {
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
        margin-right: 2rem;

        @media screen and (max-width: 1173px) {
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
          <Image src="/assets/5tales.png" alt="500tales" layout="fill" />
        </div>
        <div className="div-svg">
          <a target="_blank" href="https://github.com/nasgui">
            <FaGithub />
          </a>
          <a target="_blank" href="/">
            <BiLinkExternal />
          </a>
          {/* <Link href="/projects/tales">
            <FiArrowRightCircle />
          </Link> */}
        </div>
      </div>
    </DivProjectWrapper>
  );
};

export default Tales;
