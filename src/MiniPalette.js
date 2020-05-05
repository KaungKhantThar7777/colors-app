import React from 'react';
import {withStyles} from '@material-ui/styles'

const styles = {
   root:{
       backgroundColor:'white',
       border:'1px solid black',
       padding:'0.5rem',
       position:'relative',
       width:'100%',
       overflow:'hidden',
       '&:hover':{
           cursor:'pointer'
       }
   },
   colors:{
       backgroundColor:'grey',
       height:'150px',
       width:'100%',
       
   },
   title:{
       display:'flex',
       justifyContent:'space-between',
       alignItems: 'center',
       fontSize:'1rem',
       margin:'0',
       paddingTop:'0.4rem',
       position:'relative',
   },
   emoji:{
       fontSize:'1.5rem',
       marginLeft:'0.5rem'
   },
   miniBox:{
       height:'25%',
       width:'20%',
       display:'inline-block',
       margin:'0 auto',
       position:'relative',
       marginBottom:'-3.5px',
       
   }
}

function MiniPalette(props){
    const {classes, paletteName, emoji, colors} = props
    const miniBoxes = colors.map(colorObj => <div className={classes.miniBox} key={colorObj.name} style={{backgroundColor:colorObj.color}}></div>)
    return(
       <div className={classes.root} onClick={props.handleClick}>
            <div className={classes.colors}>
                {
                    miniBoxes
                }
            </div>
            <div className={classes.title}>
                <p>{paletteName}</p>
                <span>{emoji}</span>
            </div>
       </div>
    )
}

export default withStyles(styles)(MiniPalette);