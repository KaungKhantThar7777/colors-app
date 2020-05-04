import React, { Component } from 'react'
import './ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard'
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
        const {name,background} = this.props;
        return (
            <CopyToClipboard text={background} onCopy={this.handleCopiedChange}>
                <div style={{background}} className="ColorBox">
                <div style={{background}} className={`copy-overlay ${copied && 'show'}`}/>
                <div className={`copy-msg ${copied && 'show'}`}>
                    <h1>Copied!</h1>
                    <p>{background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="copy-btn">Copy</button>
                </div>
                <span className="see-more">More</span>
            </div>
            </CopyToClipboard>
        )
    }
}
