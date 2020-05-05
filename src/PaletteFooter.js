import React from 'react';

function PaletteFooter(props){
    let {paletteName, emoji} = props;
    return(
        <div className="Palette-footer">
        <p>{paletteName}</p>
        <span className="emoji">{emoji}</span>
</div>
    )
}

export default PaletteFooter;