import React, { Component } from 'react'
import './ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import chroma from 'chroma-js'

export default class  extends Component {
    constructor(props){
        super(props)
        this.state = {
            copied:false
        }
        this.handleCopiedChange = this.handleCopiedChange.bind(this);
    }
    handleCopiedChange(){
        
        this.setState({copied:true}, () => {
            setTimeout(() => {
                this.setState({copied:false})
            },1500)
        })
    }
    render() {
        const {copied} = this.state;
        const {name,background, moreUrl, showLink} = this.props;
        let isDarkColor = chroma(background).luminance() <= 0.05;
        let isWhiteColor = chroma(background).luminance() > 0.7;
        return (
            <CopyToClipboard text={background} onCopy={this.handleCopiedChange}>
                <div style={{background}} className="ColorBox">
                <div style={{background}} className={`copy-overlay ${copied && 'show'}`}/>
                <div className={`copy-msg ${copied && 'show'}`}>
                    <h1 className={`${isWhiteColor && 'dark-text'}`}>Copied!</h1>
                    <p className={`${isWhiteColor && 'dark-text'}`}>{background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span className={isDarkColor && 'white-text'}>{name}</span>
                    </div>
                    <button className={`copy-btn ${isWhiteColor && 'dark-text'}`}>Copy</button>
                </div>
                {
                    showLink &&  <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                    <span className="see-more">More</span>
                    </Link>
                }
               
            </div>
            </CopyToClipboard>
        )
    }
}
