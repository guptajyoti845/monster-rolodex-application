import React, {useEffect, useState} from 'react';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box-component";

const App = () => {

    console.log("render")
    const [searchString, setSearchString] = useState('');
    const [monsters, setMonsters] = useState([]);
    const [filterMonsters, setFilterMonster] = useState([])
    const onSearchMonster = (event) => {
        const searchString = event.target.value.toLocaleLowerCase();
        setSearchString(searchString);
    }

    useEffect(() => {
        console.log("called Effect")
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                setMonsters(users)
            })
    }, [])

    useEffect(() => {
        console.log("called filter")
        const newFilteredMonster = monsters
            .filter(monster =>
                monster.name.toLocaleLowerCase().includes(searchString))
        setFilterMonster(newFilteredMonster)
    }, [searchString, monsters])


    return (<div className="App">
        <SearchBox
            className='monster-search-box'
            onChangeHandler={onSearchMonster}
            type='search'
            placeholder='search monster'/>
        <CardList monsters={filterMonsters}/>
    </div>);
}
export default App;
