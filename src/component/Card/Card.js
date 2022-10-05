import React from 'react';
import './Card.css'

const Card = (props) => {
    // console.log(props.exercise.name);

   const {name,img,details,time} = props.exercise;
   const {addExerciseTime} = props;
    

    return (
        <div className='card'>
            <img src={img} alt="img" />
            <h6>{name}</h6>
            <p>{details.slice(0,50)+'...'}</p>
            <p style={{fontWeight:'500'}}>Time required: {time}<span>s</span></p>

            <button onClick={()=> addExerciseTime(time)}>Add to list</button>
        </div>
    );
};

export default Card;