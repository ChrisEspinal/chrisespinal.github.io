import React from 'react';
import styled, { keyframes } from 'styled-components';
import{ bounce } from 'react-animations';
import "../Home.css";
import world from '../world.png';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

class Home extends React.Component{

    render(){
        return(
            <div className = "Home">
                <div className = "World">
                    <Bounce>
                        <img src={world} className="Home-world" alt="world" />
                    </Bounce>
                </div>
                <div className = "Text" >
                    <div className = "Text1">Hi, I'm Chris Espinal</div>
                    <div className = "Text2">Let's Connect!</div>
                </div>
            </div>
        );
    }

}

export default Home;