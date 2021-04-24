import styled from "styled-components";
import Image from "next/image";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0 15.5rem;
  align-items: center;
  height: calc(100vh - 120px);
  @media screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
  }

  .div-hero-fh {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-left: 3rem;
    flex: 1.3;
    border-left: 2px solid var(--darkPrimary);

    @media screen and (max-width: 768px) {
      border-left: none;
    }

    h1 {
      color: var(--darkPrimary);
      font-size: 5rem;
      margin: 0;
      line-height: 4rem;
      margin-bottom: 2rem;

      @media screen and (max-width: 768px) {
        line-height: 1.2;
      }

      span {
        color: #fff;
      }
    }
    h3 {
      font-size: 1.5rem;
      color: var(--darkPrimary);
      font-weight: 400;
      margin: 0;
      line-height: 3rem;
      padding-bottom: 2rem;

      @media screen and (max-width: 768px) {
        font-size: 1.4rem;
      }
    }
    h2 {
      font-size: 1.5rem;
      font-weight: 400;
      color: #d9d9d9;
      margin: 0;
      line-height: 3rem;
      padding-bottom: 3rem;
      max-width: 90%;

      @media screen and (max-width: 768px) {
        font-size: 1.4rem;
      }
    }
    p {
      font-size: 1.5rem;
      color: var(--darkPrimary);
      font-weight: 500;
      line-height: 3rem;
      margin: 0;
      padding-bottom: 3rem;

      span {
        color: #fff;
      }

      @media screen and (max-width: 768px) {
        font-size: 1.4rem;
      }
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      max-width: 95%;

      @media screen and (max-width: 1287px) {
        justify-content: flex-start;
      }

      @media screen and (max-width: 768px) {
        justify-content: flex-start;
      }

      button {
        border: none;
        outline: none;
        color: var(--darkPrimary);
        background: transparent;
        font-weight: 500;
        padding: 1.2rem 5.1rem;
        border: 2px solid var(--darkPrimary);
        text-transform: uppercase;
        cursor: pointer;
        transition: 0.3s;
        color: #fff;

        @media screen and (max-width: 1287px) {
          padding: 1rem 2.5rem;
          margin-right: 1rem;
        }

        @media screen and (max-width: 768px) {
          padding: 0.75rem 1.5rem;
        }

        &:hover {
          transition: 0.3s;
          transform: translateY(-10px);
        }
      }
    }
  }

  .div-hero-sh {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    flex: 1;

    @media screen and (max-width: 1196px) {
      display: none;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }

    img {
      opacity: 0.9;
    }
  }
`;

const Hero = () => {
  return (
    <HeroWrapper>
      <div className="div-hero-fh">
        <h1>
          0.1.<span>Hello</span> I'm Guido,
        </h1>
        <h3>Guido Nasini</h3>
        <h2>
          I’m a Fullstack Developer based on Argentina who loves creating clean
          and intuitive web apps.
        </h2>
        <p>
          {`<`}
          <span>choose your path</span>
          {`>`}
        </p>
        <div>
          <button type="button">Projects</button>
          <button type="button">About me</button>
          <button type="button">Resume</button>
        </div>
      </div>
      <div className="div-hero-sh">
        <Image src="/assets/dev.svg" alt="planet" width={400} height={400} />
      </div>
    </HeroWrapper>
  );
};

export default Hero;
