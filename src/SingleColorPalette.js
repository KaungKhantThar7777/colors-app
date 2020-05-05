import React, { Component } from 'react'
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';

export default class SingleColorPalette extends Component {
    constructor(props){
        super(props)
        this.state = {
            format:'hex',
        }
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        this.handleFormat = this.handleFormat.bind(this);
    }
    handleFormat(format){
        this.setState({
            format
        })
    }
    gatherShades(palette, colorId){
        let shades = [];
        let allColors = palette.colors;
        for(let i in allColors){
            shades = shades.concat(allColors[i].filter(color => color.id === colorId))
        }
        return shades.slice(1);
    }
    render() {
        let {format} = this.state;
        const {paletteName, emoji, id} = this.props.palette;
        let colorBoxes = this._shades.map(color => <ColorBox key={color.name} className="ColorBox" name={color.name} background={color[format]} showLink={false}/>)
        return (
            <div className="SingleColorPalette Palette">
                <Navbar showSlider={false} format={format} handleFormat={this.handleFormat}/>
                <div className="Palette-colors">
                {
                    colorBoxes
                }
                    <div className="backBox ColorBox" >
                        <Link to={`/palette/${id}`} className="back-btn">Go Back!</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}
