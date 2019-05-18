import React from 'react';
import './FullPage.css';

//const styles = {}

class FullPage extends React.Component{
	constructor(props){
		super(props);
		this.props=props;
	}

	
	

	render() {
		return (
			<div className="mainItem" style={{backgroundColor:this.props.bgcolor}}>
				{this.props.children}
			</div>
		);
	}

}

export default FullPage;
