import React from "react";
import './card-styles.css'

const Card = ({card: {name, email, id}}) => {

    return (
        <div className='card-container'>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2`} width={`180`}
                 height={`180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card
