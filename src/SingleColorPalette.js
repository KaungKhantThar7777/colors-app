import React, { Component } from 'react'
import ColorBox from './ColorBox';

export default class SingleColorPalette extends Component {
    constructor(props){
        super(props)
        this._shades = this.gatherShades(this.props.palette, this.props.colorId);
        console.log(this._shades);
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
        let colorBoxes = this._shades.map(color => <ColorBox name={color.name} background={color.hex} showLink={false}/>)
        return (
            <div className="Palette">
                <h1>Single Color Palette</h1>
                <div className="Palette-colors">
                {
                    colorBoxes
                }
                </div>
            </div>
        )
    }
}
