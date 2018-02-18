import React from 'react';

const spanStyle = {
	width:'200px', display: 'inline-block',
	fontSize: '30px'
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
if (Number(props.coin.price_usd) > 1) {
  spanStyles = spanStyle1;
} else {
  spanStyles = spanStyle2;
}
return (


<div>
  <div style={spanStyle}> { props.coin.symbol }</div>
  <div style={spanStyles}>{ props.coin.price_usd }</div>

</div>	
 
)
}
export default CryptosInList;