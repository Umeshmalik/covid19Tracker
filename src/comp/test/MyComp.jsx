import React from 'react'
import Radium, {StyleRoot} from 'radium';
import { fadeIn} from 'react-animations'

function MyComp() {
    const style={
    fadeIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
      }
    }
    return (
        <StyleRoot>
            <div  style={style.fadeIn}>
                Made with ❤️ in <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/275/flag-india_1f1ee-1f1f3.png" alt="indian flag" height='50px' title='india'/>  
            </div>
        </StyleRoot>
    )
}

export default MyComp
