import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import routes from '../../../infrastructure/config/page-route';
import { PageSettings } from '../../../infrastructure/config/page-settings';

function setTitle(path, routeArray) {
	var pageTitle;
	for (var i=0; i < routeArray.length; i++) {
		if (routeArray[i].path === path) {
			pageTitle = 'PRODUKSI | ' + routeArray[i].title;
		}
	}
	document.title = (pageTitle) ? pageTitle : 'PRODUKSI | React App';
}

class Content extends React.Component {
	componentDidMount() {
		setTitle(this.props.history.location.pathname, routes);
	}
	componentWillMount() {
    this.props.history.listen(() => {
			setTitle(this.props.history.location.pathname, routes);
    });
  }
  
	render() {
		return (
			<PageSettings.Consumer>
				{({pageContentFullWidth, pageContentClass, pageContentInverseMode}) => (
					<div className={'content ' + (pageContentFullWidth ? 'content-full-width ' : '') + (pageContentInverseMode ? 'content-inverse-mode ' : '') + pageContentClass}>
						{routes.map((route, index) => (
							<Route
								key={index}
								path={route.path}
								exact={route.exact}
								component={route.component}
							/>
						))}
					</div>
				)
			}
			</PageSettings.Consumer>
		)
	}
}

export default withRouter(Content);
