import React, { Component } from 'react';
// import styled, { keyframes } from 'syled-components';
// import{ bounce } from 'react-animations';

// const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

class Home extends React.Component{

    render(){
        return(
            <div className = "Home">
                <h1>This is my 'Home' component test</h1>
                {/* <Bounce>Welcome!</Bounce> */}
            </div>
        );
    }

}

export default Home;