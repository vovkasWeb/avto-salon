
import './app.css';
import { Component } from 'react';
import Carslist from '../cars-list/cars-list';
import CardFilter from '../card-filter/card-filter';
class App extends Component {
	constructor(props){
		super(props);
		this.state= {
			data: [
				{ name: "Toyota AURIS", yersCreate:2011, mileage: 180000, type:"Хечбег", motor:"Бензин", tracmichion:"Передний", machineBox:"Автомат", price:344344, img:"https://vidi-automarket.com.ua/uploads/media/dc_car_gallery/0003/63/thumb_262525_dc_car_gallery_small.png", recommendation:true, goodsPrice:false,  new:true, id: 1 },
				{ name: "SsangYong KYRON", yersCreate:2012, mileage: 183000, type:"Кроссоверг", motor:"Дизель", tracmichion:"Полный", machineBox:"Автомат", price:344344, img:"https://vidi-automarket.com.ua/uploads/media/dc_car_gallery/0003/63/thumb_262386_dc_car_gallery_small.png", recommendation:false, goodsPrice:true,  new:false, id: 2 },
				{ name: "LAND ROVER", yersCreate:2020, mileage: 42642, type:"Кроссовер", motor:"Дизель", tracmichion:"AWD", machineBox:"Автомат", price:1496690, img:"https://vidi-automarket.com.ua/uploads/media/dc_car_gallery/0003/58/thumb_257919_dc_car_gallery_slider.png",  recommendation:true, goodsPrice:false,  new:false, id: 3 },
				{ name: "Citroen C3", yersCreate:2017, mileage: 69000, type:"Хечбег", motor:"Дизель", tracmichion:"Передний", machineBox:"Механика", price:630000, img:"",  recommendation:false, goodsPrice:false,  new:false, id: 4 },
			 ],
			 priceot:0,
			 pricedo:100000000000,
		}
	}
	onUpdatePriceot =(priceot)=>{
		this.setState({priceot});
	}
	
	onUpdatePricedo =(pricedo)=>{
		this.setState({pricedo});
	}
	onUpdateMiliot =(miliot)=>{
		this.setState({miliot});
	}
	onUpdateMiliedo =(milido)=>{
		this.setState({milido});
	}
	filterCars = (arr)=>{
		return arr.filter((item)=>item.price > this.state.priceot && item.price < this.state.pricedo);
	}
	deletecar = (id) => {
		this.setState(({ data }) => {
		 
  
		  return {
			 data: data.filter((item) => item.id !== id),
		  };
		});
	 };
  render(){
	const {data} = this.state;
	const newData = this.filterCars(data);
	return (
		
		<section className="cars">
          <div className="container-midl">
            <h2>Объявление о продаже б/у авто с пробегом в Киеве</h2>
            <div className="cars__wrapper">
              <div className="flter">
		<CardFilter onUpdatePriceot={this.onUpdatePriceot} onUpdatePricedo={this.onUpdatePricedo} onUpdateMiliedo={this.onUpdateMiliedo} onUpdateMiliot={this.onUpdateMiliot}/>
		</div>
		<Carslist data={newData} onDelete={this.deletecar}/>
		</div>
       </div>
        </section>

	 );
  }
}

export default App;
