import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Backbone from 'backbone'
import './index.css';
<<<<<<< HEAD
import HomeView from './components/homeView';
import InfoForm from './components/infoForm';
<<<<<<< Updated upstream
import ShelterView from './components/shelterView';
=======
import './css/main.css';
>>>>>>> Stashed changes
=======
import HomeView from './components/homeView.js'
import './css/main.css';
>>>>>>> 9a3c1a75ec1aa30dd23bada8d26219d35d1239c6



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
