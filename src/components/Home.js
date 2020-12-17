import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import{ bounce } from 'react-animations';
import "../Home.css";
import arrow2 from '../arrow2.png';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

class Home extends React.Component{

    render(){
        return(
            <div className = "Home">
                <div className = "Arrow">
                    <Bounce>
                        <img src={arrow2} className="Home-arrow" alt="arrow" />
                    </Bounce>
                </div>
                    <h1>I'm Chris Espinal</h1>
                    <h1>Click Here!</h1>
                <div className = "Bounce">
                </div>
            </div>
        );
    }

}

export default Home;