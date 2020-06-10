import React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';

class HomePageComponent extends Component {


    render() {

        return (
            <div >

                <div id="homepage" className="home-greeting">
                    <h2>Hello Visitor, </h2>
                    <h1 className="white-text">I'm a software developer.</h1>
                    <h2>How can I assist you?</h2>

                    <p className="white-text">I can design, and develop mobile application for you. Feel like I can assist you with your Project!!!</p>
                    <a className="" href={"mailto:shivachit1@gmail.com"}>
                        <Button className="hireme-button">Let's Talk</Button>
                        <p className="name">shivachit1@gmail.com</p>
                    </a>


                </div>



            </div>
        );

    }

}
export default HomePageComponent;