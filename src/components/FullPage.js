import React from 'react';
import './FullPage.css';

//const styles = {}

class FullPage extends React.Component{
	constructor(props){
		super(props);
		this.props=props;

		this.mainItemRef = React.createRef();//props.refs;
	}

	
	

	render() {
		return (
			<div ref={this.mainItemRef} className="mainItem" style={{backgroundColor:this.props.bgcolor}}>
				{this.props.children}
			</div>
		);
	}

}

export default FullPage;
