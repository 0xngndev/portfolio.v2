import styled from "styled-components";

const FooterWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  display: row;
  height: 40rem;

  button {
    outline: none;
    border: none;
    background: transparent;
    padding: 3.5rem;
    font-size: 1.5rem;
    color: #fff;
    border: 2px solid var(--darkPrimary);
    transition: 0.3s;

    &:hover {
      transition: 0.3s;
      transform: translateY(-10px);
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <button>BACK TO TOP</button>
    </FooterWrapper>
  );
};

export default Footer;
