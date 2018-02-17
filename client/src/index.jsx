import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  term: '',
  	  currencies: []
  	};	
  	this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }	

  componentDidMount() {
  	var component = this;
    $.ajax({
      type: 'GET',
      url: '/currencies', 
      success: (data) => {
        component.setState({
          currencies: JSON.parse(data)
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  

  onChange(event) {
    this.setState({term: event.target.value.toLowerCase()});
  }

  handleSubmit(event) {
  	console.log(this.state.term)
  	//event.preventDefault();

  $.post('/currencies', {id: this.state.term}, function (data){
      console.log('searched');
    })
  }


  render() {
    return (
    <div>
      <h1>CryptoTracker</h1>
      <form onSubmit={this.handleSubmit}> 
        <label>
        <input type="text" value={this.state.term} onChange={this.onChange} />
        </label>
        <input type="submit" value="Add" />
      </form>
      <List currencies={this.state.currencies} />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));