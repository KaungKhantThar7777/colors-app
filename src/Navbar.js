import React, { Component } from 'react'
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom'
import 'rc-slider/assets/index.css';
import './Navbar.css';
export default class Navbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            open : false
        }
        this.handleFormat = this.handleFormat.bind(this);
        this.handleCloseSb = this.handleCloseSb.bind(this);
    }
    handleFormat(e){
        this.setState({open: true})
        this.props.handleFormat(e.target.value);
    }
    handleCloseSb(){
        this.setState({
            open: false
        })
    }
    render() {
        const {level, handleSlide, format} = this.props;
        return (
            <header className="Navbar">
                <div className="Navbar-title">
                    <Link to="/" className="Navbar-link">reactcolorpicker</Link>
                    
                </div>
                <div className="slider-container">
                    <span className="level-msg">Leval: {level}</span>
                    <div className="slider">
                        <Slider min={100} max={900} defaultValue={level} step={100} onAfterChange={handleSlide}/>
                    </div>
                </div>
                <div className="select-container">
                    <Select value={format} onChange={this.handleFormat}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGB - rgb(255,255,255, 1.0)</MenuItem>
                    </Select>
                </div>
                <div className="snack-bar">
                    <Snackbar 
                        anchorOrigin={{vertical:'bottom', horizontal:'left'}}
                        open={this.state.open}
                        autoHideDuration= {3000}
                        message={<span id="message-id">Format changed to {format.toUpperCase()}</span>}
                        ContentProps = {{
                            "aria-describedby": "message-id"
                        }}
                        action = {[
                            <IconButton onClick={this.handleCloseSb}>
                                <CloseIcon />
                            </IconButton>
                        ]}
                        onClose={this.handleCloseSb}
                    />
                </div>
            </header>
        )               
    }
}
