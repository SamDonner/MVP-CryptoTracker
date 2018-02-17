import React from 'react';

const List = (props) => (
  <ul>
    {props.currencies.map(function(currency) { 
      
        <li>{currency}</li>;
     
      }
  </ul>
)



export default List;