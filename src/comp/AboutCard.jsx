import React from "react";

const AboutCard = ({name}) =>{
    const style = {
        card:{
            background:'#fbdba0',
            display:'grid',
            width:'250px',
            height:'350px',
            borderRadius:'5%',
            margin:'30px'
        }
    }
    return(
        <div style={style.card}>
            <p>{name}</p>
        </div>
    )
}

export default AboutCard;