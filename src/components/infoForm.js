import React from 'react';
import Backbone from 'backbone';
import ACTIONS from '../ACTIONS.js';
import STORE from '../STORE.js';

var InfoForm = React.createClass({

	
	componentWillMount: function() {
		STORE.on('storeChanged', ()=>{
			this.setState(
				STORE._getData()
			)
		})
		console.log(this.state)
	},

	componentWillUnmount: function() {
		STORE.off()
	},


	getInitialState: function() {
		return STORE._getData()
	},

	handleChange: function(event) {
		
		STORE._set({
			info: event.target.value
		})
	},

	handleAgeChange: function(event) {
		
		STORE._set({
			info: {...STORE._get('info'),
				age: event.target.value	
			}
		})

		console.log(STORE._getData())
	},

	handleGenderChange: function(event) {
		
		STORE._set({
			info: {...STORE._get('info'),
				gender: event.target.value	
			}
		})

		console.log(STORE._getData())
	},

	handleSubmit: function(event){
		event.preventDefault();
		
		STORE._set({
			info: {...STORE._get('info'),
				enteredInfo: true
			}
		})
		document.location.hash = STORE._get('placeholderHash')

		

	},
	

	render: function() {

		return (
			
		<form onSubmit={this.handleSubmit}>
        <label>
          Gender identity 
          <select value={this.state.info.gender} onChange={this.handleGenderChange}>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Age
          <select value={this.state.info.age} onChange={this.handleAgeChange}>
            <option value="0 to 5">0 to 5</option>
            <option value="6 to 12">6 to 13</option>
            <option value="13 to 18">13 to 18</option>
            <option value="19 to 26">19 to 26</option>
            <option value="27 to 39">27 to 39</option>
            <option value="40 to 54">40 to 54</option>
            <option value="55 to 64">40 to 54</option>
            <option value="65 or older">65 or older</option>

          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
      
      )

	}

})


export default InfoForm;