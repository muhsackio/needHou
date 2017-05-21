import React from 'react';
import Header from './header';


const HomeView = React.createClass({
		render: function() {
				return (
					<div className= "home">
						<Header />
						<ResourceList />
					</div>  

					);
		}
});

const Categories = React.createClass({
    render: function () {
        var categories = {
            "Shelter": <i className="col-xs-1 fa fa-home" aria-hidden="true"></i>,
            "Facilities": <i className="col-xs-1 fa fa-shower" aria-hidden="true"></i>,
            "Food": <i className="col-xs-1 fa fa-cutlery" aria-hidden="true"></i>,
            "Everyday Things": <i className="col-xs-1 fa fa-gift" aria-hidden="true"></i>,
            "Health": <i className="col-xs-1 fa fa-medkit" aria-hidden="true"></i>,
            "Job Counselling": <i className="col-xs-1 fa fa-briefcase" aria-hidden="true"></i>,
            "Money Help": <i className="col-xs-1 fa fa-money" aria-hidden="true"></i>,
            "Legal": <i className="col-xs-1 fa fa-gavel" aria-hidden="true"></i>,
            "Support and Counselling": <i className="col-xs-1 fa fa-users" aria-hidden="true"></i>
        };
        var categoriesLink = Object.entries(categories).map(function([key, value]) {
            return ( <a className="col-xs-12 btn btn-default btn-lg text-left" href={'/'}>
                    {value} {key}
                    </a>
                    );
        });
        return (<div>{categoriesLink}</div>);
    }
});

const ResourceList = React.createClass({
		render: function() {
		return (
        <div className="container">
            <div className="row">
                <h1 className="col-xs-12 text-center">
                Houston Displaced Help
            </h1>
            </div>
            <div className="row">
                <Categories />
            </div>
        </div>       
    );

	}
})


export default HomeView