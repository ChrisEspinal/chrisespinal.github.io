import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import{ bounce } from 'react-animations';
import "../Home.css";

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

class Home extends React.Component{

    render(){
        return(
            <div className = "Home">
                <h1>Click Here</h1>
                <h1>I'm Chris Espinal!</h1>
                <div className = "Bounce">
                    <Bounce>
                        Welcome!
                    </Bounce>
                </div>
            </div>
        );
    }

}

export default Home;