import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Palette.css';


export default class Palette extends Component {
    render() {
        const colors = this.props.colors.map(colorObj => <ColorBox background={colorObj.color} name={colorObj.name} />)
        return (
            <div className="Palette">
                {/* Nav here */}
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
