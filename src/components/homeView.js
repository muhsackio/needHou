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
    <a className="resourceButton" href="#shelters">Shelter</a>
    <a className="resourceButton" href="#facilities"> Facilities</a>
    <a className="resourceButton" href="#food"> Food</a>
    <a className="resourceButton" href="#everdayThings"> Everyday Things</a>
    <a className="resourceButton" href="#health"> Health</a>
    <a className="resourceButton" href="#jobCounseling"> Job Counseling</a>
    <a className="resourceButton" href="#moneyHelp"> Money Help</a>
    <a className="resourceButton" href="#legal"> Legal</a>
    <a className="resourceButton" href="#support"> Support & Counseling</a>
  </div>
  		)

	}
})

export default HomeView