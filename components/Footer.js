import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

const FooterWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  display: row;
  height: 35rem;

  button {
    outline: none;
    border: none;
    background: transparent;
    padding: 3rem;
    font-size: 1.5rem;
    color: #fff;
    border: 2px solid var(--darkPrimary);
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      transition: 0.3s;
      transform: translateY(-10px);
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkScroll
        style={{ textDecoration: "none" }}
        spy={true}
        to="hero"
        duration={500}
        smooth={true}
        offset={-200}
      >
        <button>BACK TO TOP</button>
      </LinkScroll>
    </FooterWrapper>
  );
};

export default Footer;
