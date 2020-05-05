import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class PaletteList extends Component {
    render() {
        const paletteLinks = this.props.palettes.map(palette => (
            <p><Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link></p>
        ))
        return (
            <div>
                <h1>React Colors</h1>
                {paletteLinks}
            </div>
        )
    }
}
