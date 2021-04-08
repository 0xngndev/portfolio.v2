import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const NavContainer = styled.nav`
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

  .div-second-half {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    flex-direction: row;

    ul {
      display: flex;
      flex-direction: row;
      text-decoration: none;
      margin: 0;
      padding: 0;

      li {
        text-decoration: none;
        list-style-type: none;

        .h1-first {
          padding-left: 0;
        }

        h3 {
          color: var(--darkPrimary);
          font-weight: 500;
          font-size: 1.2rem;
          padding-left: 3rem;
          cursor: pointer;

          span {
            color: var(--darkSecondary);
            font-weight: 500;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <div className="div-first-half">
        <h3>
          0.0.<span>G</span>
        </h3>
        <div></div>
        <Link href="https://github.com/nasgui">
          <FaGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/guido-nasini/">
          <AiFillLinkedin />
        </Link>
      </div>
      <div className="div-second-half">
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
  );
};

export default Navbar;
