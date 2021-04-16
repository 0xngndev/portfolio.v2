import styled from "styled-components";

const ContactWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: center;
  padding: 0 15.5rem;
  align-items: center;

  .div-img-left {
    display: grid;
    grid-column: 1/6;
  }

  .div-content-right {
    display: grid;
    grid-column: 6/-1;
  }
`;

const Contact = () => {
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
