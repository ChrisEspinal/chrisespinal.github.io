import React, { useState } from "react";
import "../ContactMe.css";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
 
    setName("");
    setEmail("");
    setMessage("");

    alert(name + ', your message has been sent successfully!');
  };

  return (
    <div className="FormContainer">
    <h1>Contact Me</h1>
    <form className="form" onSubmit={handleSubmit}>
      <div className="ContactInfo">
        <div className="ContactLinks">
        <br/>
          <div><a href= "https://github.com/ChrisEspinal" className = "Github">Visit My GitHub</a></div>
          <br/>
          <div><a href= "http://linkedin.com/in/chrisespinal" className = "LinkedIn">Connect On LinkedIn</a></div>
          <br/><br/>
          <div className= "FHeader">Or complete the form below:</div>
          <br/><br/><br/>
        </div>
      </div>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
      >
        Submit
      </button>
    </form>
    </div>
  );
};

export default ContactMe;