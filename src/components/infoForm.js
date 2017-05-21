import React from 'react';
import Backbone from 'backbone';
import ACTIONS from '../ACTIONS.js';
import STORE from '../STORE.js';
import '../css/infoForm.css';

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
				<div>
					<h3>
						To help me find the right services I'll ask you a few questions
					</h3>
					<h4>
						All of your answers are private and anonymous.
					</h4>
				</div>
				<div className="bottomInputMargin">
					<label>
						Gender identity
					</label>
					<div>
						<select className="form-control form-control-lg" data-size="5" value={this.state.info.gender} onChange={this.handleGenderChange}>
							<option value="Female">Female</option>
							<option value="Male">Male</option>
							<option value="Other">Other</option>
						</select>
					</div>

				</div>
				<div className="bottomInputMargin">
					<label>
						Age
					</label>
					<select className="form-control form-control-lg" data-size="5" value={this.state.info.age} onChange={this.handleAgeChange}>
						<option value="0 to 5">0 to 5</option>
						<option value="6 to 12">6 to 13</option>
						<option value="13 to 18">13 to 18</option>
						<option value="19 to 26">19 to 26</option>
						<option value="27 to 39">27 to 39</option>
						<option value="40 to 54">40 to 54</option>
						<option value="55 to 64">40 to 54</option>
						<option value="65 or older">65 or older</option>
					</select>
				</div>
				<input className="form-control form-control-lg" type="submit" value="Submit" />
			</form>

        )

    }

})


export default InfoForm;