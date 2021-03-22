import React from 'react';
import cardliststyles from './card-list.styles.css'
import {Card} from '../cards/card.component.jsx'

export const Cardlist = props =>{
    console.log(props);
    return <div className = "cardlist">
        {
        props.monsters.map((monster)=>(
           <Card key={monster.id} monster={monster}/>
        ))
        }
        </div>
}; 