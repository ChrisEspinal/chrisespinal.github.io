import React from 'react';

class AboutMe extends React.Component{

    render(){
        return(
            <div className = "AboutMe">
                <h1>This is my 'AboutMe' component test</h1>
                <a href="/resume.pdf" download> Download Resume</a>
            </div>
            
        );
    }

}

export default AboutMe;