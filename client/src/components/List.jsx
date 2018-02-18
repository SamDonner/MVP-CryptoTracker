import React from 'react';
import CryptosInList from './CryptosInList.jsx';

const myCurStyle = {
  border:'1px solid black',
  padding: '50px',
  background: 'black',
  color: 'white',
  borderRadius: '15px',
  margin: '20px'
}
const List = (props) => (
  <div style={myCurStyle}>
    <h2> My Watchlist </h2>
   
    { props.currencies.map(coin => 
    <div>
      <CryptosInList coin={coin}/></div>
    )}
  </div>
)



export default List;

