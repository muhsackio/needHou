import React from 'react';
import Backbone from 'backbone';
import ACTIONS from '../ACTIONS.js';
import STORE from '../STORE.js';


var ShelterView = React.createClass({

	
	componentWillMount: function() {

			ACTIONS.checkInfoStatus('#shelters');
				
	},

	componentWillUnmount: function() {
		STORE.off()
	},


	getInitialState: function() {
		return STORE._getData()
	},
	

	render: function() {

		return (

			<div> woo </div> 
      
      )

	}

})


export default ShelterView;