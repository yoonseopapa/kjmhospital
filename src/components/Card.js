import React from "react";

const Card = (props) =>{
    return(
        <div style={{
            ...styles.card,
            backgroundColor:props.color,
            left: `${props.x}px`,
            top: `${props.y}px`,
            zIndex: props.z_index,
            transform: `translate(-50%, -50%) scale(${props.scale})`
        }}>
        <img style={styles.image} src={props.picsum_image} alt=''></img>
        </div>
    )

}

const styles ={
   card:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '300px',
        width: '400px',
        // border: '2px solid black',
        boxsizion: 'border-box',
        // backgroundColor: 'red'
   },
   image:{
       width : '100%',
       height: '100%',
       boxShadow: '10px 10px 8px white'
   }
}


export default Card;
