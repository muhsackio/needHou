import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Backbone from 'backbone'
import './index.css';
import HomeView from './components/homeView';
import InfoForm from './components/infoForm';



const app = function() {

	

	const Router = Backbone.Router.extend({
		routes: {
			"home": "handleHome",
			"enterInfo": "handleInfo",
			"*default": "handleDefault"
		},

		handleHome: function() {
			ReactDOM.render(<HomeView />, document.querySelector("#root"));
		},
		
		handleInfo: function() {
			ReactDOM.render(<InfoForm />, document.querySelector('#root'));
		},
		
		handleDefault: function(){
			document.location.hash = '#home'
		},
		initialize: function() {
			Backbone.history.start()
		}

	})

	new Router();

	
}


app();
registerServiceWorker();
