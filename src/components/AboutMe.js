import React from 'react';
import "../AboutMe.css";
import logo from '../chris.png';

class AboutMe extends React.Component{

    render(){
        return(
            <div className = "AboutMe">
                <div className = "Header" >
                    <h1> About Me </h1>
                    <div className = "Bio" >I'm a senior at CUNY Lehman 
                        College aspiring to be a Software Engineer/Web 
                        Developer. When I'm not hacking my problems away, 
                        I enjoy long walks on the beach while sipping on 
                        Pina Colada.
                    </div>
                    <br/>
                    <img src = "https://media.giphy.com/media/3o7qE1TfOPGlb5M5hu/giphy.gif" className= "Photo2" alt= "logo2" />
                    <br/>
                </div>
                    <div>
                        <img src={logo} className="Photo1" alt="logo" />
                        <div className = "Resume-Container">
                        <a href="/chrisespinal_resume.pdf" className = "Resume" download> Download Resume Here</a>
                        </div>
                    </div>
            </div>

        );
    }

}

export default AboutMe;