import React from 'react';
import { Link } from 'react-router-dom';
import { PageSettings } from '../../infrastructure/config/page-settings';

class ExtraError extends React.Component {
	static contextType = PageSettings;
	
	componentDidMount() {
		this.context.handleSetPageSidebar(false);
		this.context.handleSetPageHeader(false);
		this.context.handleSetPageContentFullWidth(true);
	}

	componentWillUnmount() {
		this.context.handleSetPageSidebar(true);
		this.context.handleSetPageHeader(true);
		this.context.handleSetPageContentFullWidth(false);
	}
  
	render() {
		return (
			<div className="error">
				<div className="error-code m-b-10">404</div>
				<div className="error-content">
					<div className="error-message">Halaman Tidak Tersedia</div>
					<div className="error-desc m-b-30">
						Halaman yang anda cari mungkin tidak tersedia. <br />
						Coba hubungi admin.
					</div>
					<div>
						<Link to="/dashboard" className="btn btn-success p-l-20 p-r-20">Go Home</Link>
					</div>
				</div>
			</div>
		)
	}
}

export default ExtraError;