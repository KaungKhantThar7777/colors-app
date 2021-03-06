import React, { Component } from 'react'
import MiniPalette from './MiniPalette'
import {withStyles} from '@material-ui/styles'

const styles = {
    root:{
        backgroundColor:'blue',
        height:'100vh',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start'
    },
    container:{
        width:'50%',
        display:'flex',
        flexFlow:'column wrap',
        alignItems:'flex-start',
    },
    nav:{
        display:'flex',
        justifyContent:'space-between',
        color:'white',

    },
    palette:{
        boxSizing:'border-box',
        width:'100%',
        display:'grid',
        gridTemplateColumns: 'repeat(3, 30%)',
        gridGap:'5%',
    }
}


class PaletteList extends Component {
    constructor(props){
        super(props);
        this.gotToPalette = this.gotToPalette.bind(this);
    }
    gotToPalette(id){
        this.props.history.push(`/palette/${id}`)
    }
    render() {
        const paletteLinks = this.props.palettes.map(palette => (
            <MiniPalette {...palette} handleClick={() => this.gotToPalette(palette.id)}/>
        ))
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React Colors</h1>
                    </nav>
                    <div className={classes.palette}>
                        {
                            paletteLinks
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList)
