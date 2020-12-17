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
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Me</h1>

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
  );
};

export default ContactMe;





// import React from 'react';

// class ContactMe extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//           name: '',
//           email: '',
//           message: '',
//         };
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange = (event) => {
//         let nam = event.target.name;
//         let val = event.target.value; 

//         this.setState({[nam]: val});
//         //this.setState({value: event.target.value});
        
//     }
  
//     handleSubmit(event) {
//       alert('Hey ' + this.state.value + ', your message has been sent successfully!');
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" name={this.state.value} onChange={this.handleChange} />
//           </label>
//           <label>
//             Email:
//             <input type="text" email={this.state.value} onChange={this.handleChange} />
//           </label>
//           <label>
//             Message:
//             <input type="text" message={this.state.value} onChange={this.handleChange} />
//           </label>
//           <br/>
//           <br/>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }

//   export default ContactMe;





// import React from 'react';

// class ContactMe extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         username: '',
//         age: null,
//       };
//     }
//     myChangeHandler = (event) => {
//       let nam = event.target.name;
//       let val = event.target.value;
//       this.setState({[nam]: val});
//     }
//     render() {
//         // let header = '';
//         // if (this.state.username) {
//         //   header = <h1>Hello {this.state.username}</h1>;
//         // } else {
//         //   header = '';
//         // }
//       return (
//         <form>
//         <h1>Hello {this.state.username} {this.state.age}</h1>
//         <p>Enter your name:</p>
//         <input
//           type='text'
//           name='username'
//           onChange={this.myChangeHandler}
//         />
//         <p>Enter your age:</p>
//         <input
//           type='text'
//           name='age'
//           onChange={this.myChangeHandler}
//         />
//         </form>
//       );
//     }
//   }

// export default ContactMe;