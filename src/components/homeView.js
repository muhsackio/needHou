import React from 'react';
import Header from './header'




const HomeView = React.createClass({
		render: function() {
				return (
					<div className= "home">
						<Header />
						<ResourceList /> 

					</div>  

					)
		}
})


const ResourceList = React.createClass({
		render: function() {
		return (
			<div className="resources">
    <a className="resourceButton" href="#1">Shelter</a>
    <a className="resourceButton" href="#1"> Facilities</a>
    <a className="resourceButton" href="#1"> Food</a>
    <a className="resourceButton" href="#1"> Everyday Things</a>
    <a className="resourceButton" href="#1"> Health</a>
    <a className="resourceButton" href="#1"> Job Counseling</a>
    <a className="resourceButton" href="#1"> Money Help</a>
    <a className="resourceButton" href="#1"> Legal</a>
    <a className="resourceButton" href="#1"> Support & Counseling</a>
  </div>
  		)

	}
})

export default HomeView