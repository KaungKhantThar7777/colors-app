import React, { Component } from 'react'
import ColorBox from './ColorBox'

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Palette.css';
export default class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {
            level : 500
        }
        this.handleSlide = this.handleSlide.bind(this);
    }
    handleSlide(level){
        console.log(level);
        this.setState({
            level
        })
    }
    render() {
        const { level } = this.state;
        const colors = this.props.palette.colors[level].map(colorObj => <ColorBox background={colorObj.hex} name={colorObj.name} />)
        return (
            <div className="Palette">
                {/* Nav here */}
                <div className="slider">
                    <Slider min={100} max={900} defaultValue={level} step={100} onAfterChange={this.handleSlide}/>
                </div>
                
                <div className="Palette-colors">
                    {
                        colors
                    }
                </div>
                {/* Palette-colors here */}
                {/* Footer */}
            </div>
        )
    }
}
