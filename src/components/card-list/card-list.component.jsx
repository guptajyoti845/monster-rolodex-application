import React from "react";
import './card-list-styles.css';
import Card from "./card-component";

const CardList = ({monsters}) => {
    return (<div className={`card-list`}>{
        monsters.map((monster) => (<Card card={monster} key={monster.id}/>)
        )}
    </div>);

}

export default CardList;
