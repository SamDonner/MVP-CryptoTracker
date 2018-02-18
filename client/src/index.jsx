import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

const appStyle = {
  margin: '0 auto',
  width: '50%'
};

const titleStyle = {
  background: 'black',
  color: 'white',
  textAlign: "center",
  borderRadius: '10px'
}


class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  term: '',
  	  currencies: []
  	};
  	this.getCurrencies = this.getCurrencies.bind(this);	
  	this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }	

   getCurrencies() {
     $.ajax({
       type: 'GET',
       url: '/currencies', 
       success: (data) => {
      	 console.log(JSON.parse(data))
         this.setState({
           currencies: JSON.parse(data)
         })
       },
       error: (err) => {
         console.log('err', err);
       }
     });
   }

   componentDidMount() {
  	this.getCurrencies();

   }
  

  onChange(event) {
    this.setState({term: event.target.value.toLowerCase()});

  }

  handleSubmit(event) {
  	console.log(this.state.term)
    event.preventDefault();
    var that = this;
    $.post('/currencies', {id: this.state.term}, function (data){
      console.log('searched');
      that.setState({
      	term: ''
      })
      that.getCurrencies();
    })
  

  }




  render() {
    return (
    <div style={appStyle}>
      <h1 style={titleStyle}>CryptoWatcher</h1>
      <div style={{textAlign:'center'}}>
      <form onSubmit={this.handleSubmit}> 
        <label>
        <input style={{margin: '10px', width: '50%', height: '20px'}}type="text" value={this.state.term} onChange={this.onChange} />
        </label>
        <div >
        <input style={{width:'25%', padding:'14%'}}type="submit" value="Add" /></div>
      </form>
      <List currencies={this.state.currencies} />
      </div>
    </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));