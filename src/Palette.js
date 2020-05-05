import React, { Component } from 'react'
import ColorBox from './ColorBox'

import Navbar from './Navbar'
import './Palette.css';
export default class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {
            level : 500,
            format : 'hex',
        }
        this.handleSlide = this.handleSlide.bind(this);
        this.handleFormat = this.handleFormat.bind(this);
    }
    handleSlide(level){
        this.setState({
            level
        })
    }
    handleFormat(format){
        this.setState({
            format
        })
    }
    render() {
        const { level,format } = this.state;
        const {paletteName, emoji, id} = this.props.palette;
        const colors = this.props.palette.colors[level].map(colorObj => <ColorBox moreUrl={`/palette/${id}/${colorObj.id}`} key={colorObj.id} background={colorObj[format]} name={colorObj.name} showLink={true}/>)
        return (
            <div className="Palette">
                <Navbar format={format} handleFormat={this.handleFormat} level={level} handleSlide={this.handleSlide}/>
                
                <div className="Palette-colors">
                    {
                        colors
                    }
                </div>
                <div className="Palette-footer">
                        <p>{paletteName}</p>
                        <span className="emoji">{emoji}</span>
                </div>
            </div>
        )
    }
}
