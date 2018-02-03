import React, { Component } from 'react';
import {Col, Row} from 'react-materialize';
// import Team from '../Team/Team.js';
// import teamMember.json from "./teamMember.json"

class About extends Component{

    render(){
        return(
            <div id="about-page">
                <div className="container" id="about-text">
                    <Row>
                        <Col s={12} className="center-align">
                            <h3>-Our Motto-</h3>
                            <p>Discover You</p>
                            <h3>-About-</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tincidunt tristique tristique.
                             Proin sagittis nisi vel lorem vehicula elementum. Quisque tincidunt tempor risus sed dictum.
                             Curabitur quis dui quis nulla sagittis volutpat nec sed neque.
                             Phasellus interdum, elit vitae sagittis accumsan, tortor libero tincidunt velit, eget dictum est sapien eget sem.</p>
                             <p><b>Meet the Team</b></p>
                        </Col>
                    </Row>
                </div>
                <div className ="container" id="team-members">
                    <Row>

                    </Row>
                </div>
            </div>
        );
    }
}

// const 

export default About;
