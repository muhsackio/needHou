import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Backbone from 'backbone'
import './index.css';
import HomeView from './components/homeView.js'
import './css/main.css';



const app = function() {

	

	const Router = Backbone.Router.extend({
		routes: {
			"home": "handleHome",
			"*default": "handleDefault"
		},

		handleHome: function() {
			ReactDOM.render(<HomeView />, document.querySelector("#root"));
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
