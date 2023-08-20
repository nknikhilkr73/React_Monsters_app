import { useEffect, useState } from 'react';
import './App.css';
import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';

const App=()=>{

const [searchField, setSearchField]=useState('');
const [monsters, setMonsters]=useState([]);
const [filteredMonsters, setFilterMonsters]=useState(monsters)
  const onSearchChange=(e)=>{
    const searchFieldString= e.target.value.toLocaleLowerCase();
 setSearchField(searchFieldString)
  
    }

    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then((users)=> setMonsters(users))
    },[])

 useEffect(()=>{
  const newFilteredMonsters = monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField)
      })
      setFilterMonsters(newFilteredMonsters)
 },[monsters, searchField])

  return (
    <div className="App">
    <h1 className="title">Monsters</h1>
      <SearchBox onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
