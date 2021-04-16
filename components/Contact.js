import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const Title = styled.h1`
  color: var(--darkPrimary);
  font-weight: 700;
  font-size: 6.4rem;
  align-self: center;
  justify-content: center;
  padding: 0 15.5rem;
  span {
    color: #fff;
  }
`;

const ContactWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 15.5rem;
  align-items: center;

  border: 2px solid var(--darkPrimary);

  .div-img-left {
    display: flex;
    flex: 0.5;
    padding: 3rem;
    align-items: center;
    justify-content: center;
  }

  .div-content-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4rem;
    flex: 1;
    width: 100%;
    border-left: 2px solid var(--darkPrimary);

    form {
      width: 100%;
      label {
        color: #fff;
        display: flex;
        flex-direction: column;
        margin-bottom: 3rem;
        justify-content: center;

        input {
          outline: none;
          border: none;
          height: 25px;
          border: 2px solid var(--darkPrimary);
          background: transparent;
          font-family: "Roboto Mono";
          color: #fff;
          padding-left: 0.5rem;
        }
      }
    }

    button {
      outline: none;
      border: none;
      width: 100%;
      justify-content: center;
      align-items: center;
      color: #fff;
      border: 2px solid var(--darkPrimary);
      background: transparent;
      cursor: pointer;
      height: 25px;
      padding: 0;
      margin: 0;
    }
  }

  .text-area {
    outline: none;
    border: none;
    height: 100px;
    border: 2px solid var(--darkPrimary);
    background: transparent;
    font-family: "Roboto Mono";
    color: #fff;
    padding-left: 0.5rem;
  }
`;

const Contact = () => {
  const [inputs, setInputs] = useState({
    email: "",
    subject: "",
    body: "",
  });

  const handleChange = (e) => {
    let { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const { email, subject, body } = inputs;

  return (
    <>
      <Title>
        0.4.<span>Contact</span>
      </Title>
      <ContactWrapper>
        <div className="div-img-left">
          <Image src="/assets/dev.svg" alt="planet" width={300} height={300} />
        </div>
        <div className="div-content-right">
          <form>
            <label htmlFor="email">
              Email
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={handleChange}
              ></input>
            </label>
            <label htmlFor="subject">
              Subject
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={handleChange}
              ></input>
            </label>
            <label htmlFor="body">
              Body
              <textarea
                className="text-area"
                type="textarea"
                name="body"
                placeholder="Message"
                value={body}
                onChange={handleChange}
              ></textarea>
            </label>
          </form>
          <button type="submit">SEND</button>
        </div>
      </ContactWrapper>
    </>
  );
};

export default Contact;
