import React from 'react';
import './App.css';
import FullPage from './components/FullPage';
var scrollInProgress = false;
class App extends React.Component{

	state={
		touchStartPoint:0,
		touchEndPoint:0
	}

	resetScroll=()=>{
		scrollInProgress=false;
	}

	scrolling = (e)=>{
		
		if(!scrollInProgress){
			if(e.deltaY>0){
				scrollInProgress=true;
				setTimeout(this.resetScroll,1000);
				window.scrollBy({top:window.innerHeight,left:0,behavior:'smooth'})
			}else{
				scrollInProgress=true;
				setTimeout(this.resetScroll,1000);
				window.scrollBy({top:window.innerHeight*-1,left:0,behavior:'smooth'})
			}
		}
		
	}

	touched = (e)=>{
		this.setState({touchStartPoint:e.changedTouches[0].clientY});
	}
	touchfinished=(e)=>{
		this.setState({touchEndPoint:e.changedTouches[0].clientY},()=>{
			if((this.state.touchEndPoint-this.state.touchStartPoint)>0){				
				window.scrollBy({top:window.innerHeight*-1,left:0,behavior:'smooth'})
			}else if((this.state.touchEndPoint-this.state.touchStartPoint)<0){
				
				window.scrollBy({top:window.innerHeight,left:0,behavior:'smooth'})
			}
		});
	}

	componentDidMount() {
		window.addEventListener('wheel', this.scrolling,{passive: false});
	}

	componentWillUnmount() {
		window.removeEventListener('wheel', this.scrolling,{passive: false});
	}


	render() {
		return (
			<div className="App" onTouchStart={this.touched} onTouchEnd={this.touchfinished}>
				
				<FullPage bgcolor="#FF5500">
					<label>Testing</label>
				</FullPage>
				<FullPage bgcolor="#55FF00">
					<label>Testing Number TWO</label>
				</FullPage>
				<FullPage bgcolor="#0055ff">
					<label>Testing Number Three</label>
				</FullPage>
			</div>
		);
	}

}

export default App;
