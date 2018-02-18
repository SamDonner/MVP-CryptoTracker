import React from 'react';

const spanStyle = {
	width:'200px', display: 'inline-block',
	fontSize: '30px',
	color: 'white',
	textDecoration: 'none'
};
const spanStyle1 = {
	width:'200px', display: 'inline-block',
	fontSize: '30px',
	color: "green"
};
const spanStyle2 = {
	width:'200px', display: 'inline-block',
	fontSize: '30px',
	color: 'red'
};

const CryptosInList = (props) => {
var spanStyles;
if (Number(props.coin.percent_change_24h) > 0) {
  spanStyles = spanStyle1;
} else {
  spanStyles = spanStyle2;
}
return (


<div> 
  <div style= {{width:'200px', display: 'inline-block'}}><a style={spanStyle} href= {`https://coinmarketcap.com/currencies/${props.coin.name}`}> { props.coin.symbol }</a></div>
  <div style={spanStyles}>{ props.coin.price_usd }</div>

</div>	
 
)
}
export default CryptosInList;