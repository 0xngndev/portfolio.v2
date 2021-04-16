import { useState } from "react";
import styled from "styled-components";

const ContactWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 15.5rem;
  align-items: center;

  .div-img-left {
    display: flex;
    flex: 1;
  }

  .div-content-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    label {
      display: flex;
      width: 100%;
      margin-bottom: 3rem;
      justify-content: center;

      input {
        outline: none;
        border: none;
        height: 15px;
        border: 2px solid var(--darkPrimary);
        background: transparent;
        font-family: "Roboto Mono";
        color: #fff;
        padding-left: 0.5rem;

        input > placeholder {
          color: #fff;
        }
      }
    }

    button {
      outline: none;
      border: none;
      width: 100%;
      justify-content: center;
      align-items: center;
      color: var(--darkPrimary);
      border: 2px solid var(--darkPrimary);
    }
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
    <ContactWrapper>
      <div className="div-img-left">
        <h1>Placeholder</h1>
      </div>
      <div className="div-content-right">
        <form>
          <label htmlFor="email">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={handleChange}
            ></input>
          </label>
          <label htmlFor="subject">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={subject}
              onChange={handleChange}
            ></input>
          </label>
          <label htmlFor="body">
            <input
              type="textarea"
              name="body"
              placeholder="Message"
              value={body}
              onChange={handleChange}
            ></input>
          </label>
        </form>
        <button type="submit">SEND</button>
      </div>
    </ContactWrapper>
  );
};

export default Contact;
