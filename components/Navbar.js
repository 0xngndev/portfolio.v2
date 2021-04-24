import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/Gi";
import { RiCloseFill } from "react-icons/ri";
import Link from "next/link";
import { useState } from "react";

const SidebarStyles = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0e1212;
  z-index: 10;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    top: 25px;
    right: 25px;
    width: 40px;
    height: 40px;
    fill: #fff;
    cursor: pointer;
  }

  ul {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;

    li {
      text-decoration: none;
      list-style-type: none;

      .h1-first {
        padding-left: 0;
      }

      h3 {
        color: var(--darkPrimary);
        font-weight: 500;
        font-size: 3rem;
        cursor: pointer;

        span {
          color: #fff;
          font-weight: 500;
          font-size: 3rem;
        }
      }
    }
  }
`;

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 5;
  box-shadow: var(--bs);
  background-color: #0e1212;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 9rem;
  height: 80px;

  .div-first-half {
    display: flex;
    flex: 1;
    justify-content: flex-start;

    h3 {
      color: var(--darkPrimary);
      font-weight: 500;
      font-size: 1.2rem;
      padding-right: 3rem;
      cursor: pointer;

      span {
        color: var(--darkSecondary);
        font-weight: 500;
        font-size: 1.2rem;
      }
    }
    div {
      width: 1px;
      background: var(--darkPrimary);
      margin-right: 3rem;
    }

    a {
      display: flex;
      align-self: center;
      svg {
        display: flex;
        align-self: center;
        width: 30px;
        height: 30px;
        fill: var(--darkPrimary);
        cursor: pointer;
        padding-right: 3rem;
        transition: 0.3s;

        &:hover {
          transition: 0.3s;
          fill: #fff;
        }
      }
    }
  }

  .div-second-half {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    flex-direction: row;

    svg {
      display: none;

      @media screen and (max-width: 768px) {
        display: flex;
        width: 25px;
        height: 25px;
        fill: #fff;
        cursor: pointer;
      }
    }

    ul {
      display: flex;
      flex-direction: row;
      text-decoration: none;
      margin: 0;
      padding: 0;

      @media screen and (max-width: 768px) {
        display: none;
      }

      li {
        text-decoration: none;
        list-style-type: none;

        .h1-first {
          padding-left: 0;
        }

        h3 {
          color: var(--darkPrimary);
          font-weight: 500;
          font-size: 1.3rem;
          padding-left: 3rem;
          cursor: pointer;

          span {
            color: var(--darkSecondary);
            font-weight: 500;
            font-size: 1.3rem;
          }
        }
      }
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen ? (
        <SidebarStyles>
          <RiCloseFill onClick={() => setIsOpen(false)} />
          <ul>
            <li>
              <h3 className="h1-first">
                0.1.
                <span>Home</span>
              </h3>
            </li>
            <li>
              <h3>
                0.2.
                <span>Projects</span>
              </h3>
            </li>
            <li>
              <h3>
                0.3.
                <span>About</span>
              </h3>
            </li>
            <li>
              <h3>
                0.4.
                <span>Contact</span>
              </h3>
            </li>
          </ul>
        </SidebarStyles>
      ) : (
        <NavContainer>
          <div className="div-first-half">
            <h3>
              0.0.<span>G</span>
            </h3>
            <div></div>
            <a href="https://github.com/nasgui">
              <FaGithub />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/guido-nasini/">
              <AiFillLinkedin />
            </a>
          </div>
          <div className="div-second-half">
            <GiHamburgerMenu onClick={() => setIsOpen(true)} />
            <ul>
              <li>
                <h3 className="h1-first">
                  0.1.
                  <span>Home</span>
                </h3>
              </li>
              <li>
                <h3>
                  0.2.
                  <span>Projects</span>
                </h3>
              </li>
              <li>
                <h3>
                  0.3.
                  <span>About</span>
                </h3>
              </li>
              <li>
                <h3>
                  0.4.
                  <span>Contact</span>
                </h3>
              </li>
            </ul>
          </div>
        </NavContainer>
      )}
    </>
  );
};

export default Navbar;
