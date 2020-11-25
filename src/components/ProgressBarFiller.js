
import React, { Component } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
class ProgressBarFiller extends Component {
    constructor(props) {
        super(props)

        this.state = {
            percentage:0,
            visible:false
        }
        this.onEnterViewport = this.onEnterViewport.bind(this);
        this.onExitViewport = this.onExitViewport.bind(this);
    }
   
    
    onEnterViewport() {
        this.setState({
        percentage:this.props.percentage,
          visible: true
        });
        
      }
     
      onExitViewport() {
        this.setState({
         percentage:0,
          visible: false
        });
        
      }



    render() {

        return (
            <ScrollTrigger className="filler" style={{ width: `${this.state.percentage}%`}} onEnter={this.onEnterViewport} onExit={this.onExitViewport}>
            <p className="right-text">{this.state.percentage}%</p>
            </ScrollTrigger>
        );
    }

}

export default (ProgressBarFiller);