import React from "react";
import './search-box.styles.css'

const SearchBox = (props) => {
    return (<input className={`search-box ${props.className}`}
                   type={props.type}
                   placeholder={props.placeholder}
                   onChange={props.onChangeHandler}
    />);
}

export default SearchBox;
