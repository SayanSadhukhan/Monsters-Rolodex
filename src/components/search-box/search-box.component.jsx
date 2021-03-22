import React from 'react';

import './search-box.styles.css'

export const SearchBox =({placeholder,changeHandler})=> (

    <input type="search"
    placeholder={placeholder} 
    onChange={changeHandler}  
    className ='search'
      // this.setState({searchfield: e.target.value},()=>console.log(this.state.searchfield))
      // with the command we can see the state of searchfield changing instantly.

    />

)

