import './card-filter.css';
import { Component } from "react";
class CardFilter extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  priceot:100 ,
		  pricedo:100000000000000000,
		  miliot:0,
		  milido: 100000000000000000,
		};
	 }
	 onUpdatePriceot=(e)=>{
		const priceot = e.target.value;
		this.setState({priceot})
		this.props.onUpdatePriceot(priceot)
	 }
	 onUpdatePricedo=(e)=>{
		const pricedo = e.target.value;
		this.setState({pricedo})
		this.props.onUpdatePriceot(pricedo)
	 }
	 onUpdateMiliot=(e)=>{
		const miliot = e.target.value;
		this.setState({miliot})
		this.props.onUpdateMiliot(miliot)
	 }
	 onUpdateMiliedo=(e)=>{
		const  milido = e.target.value;
		this.setState({milido})
		this.props.onUpdatePriceot( milido)
	 }
	
	render(){
		return(
			<div>
				<h3>Price:</h3>
				<input type="number"  value={this.state.priceot} onChange={this.onUpdatePriceot}/>
				<input type="number"value={this.state.pricedo} onChange={this.onUpdatePricedo}/>
				<h3>mili:</h3>
				<input type="number"  value={this.state.miliot} onChange={this.onUpdateMiliot}/>
				<input type="number"value={this.state.milido} onChange={this.onUpdateMiliedo}/>
			</div>
		)
	}
}
export default CardFilter;