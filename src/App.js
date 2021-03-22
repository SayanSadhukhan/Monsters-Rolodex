import React , {Component} from 'react';
import {Cardlist} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component'
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state={
      monsters:[],
      searchfield:'',
      // monsters:[
      //   {
      //     name:'Frankenstine',
      //     id: 'asc1'

      //   },
      //   {
      //     name: 'Dracula',
      //     id:'asc2'
      //   },
      //   {
      //     name: 'zombie',
      //     id:'asc3'
      //   }
      // ]
    };
  }
  
  
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => (response.json()))
  .then((users)=>(this.setState({monsters:users})))
}
  
  render(){
    const {monsters, searchfield } = this.state;
    const filteredMonsters = monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchfield.toLowerCase())
    
    )
    return(
      <div className="App">
      
      <h1>Monsters Rolodex</h1>
      <SearchBox 
      placeholder='Search Monsters'
      changeHandler={e =>this.setState({searchfield: e.target.value})}
      />
        
      
      <Cardlist monsters={filteredMonsters}/>
    </div>
    )
  }
};

export default App;
