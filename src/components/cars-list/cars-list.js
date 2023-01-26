import React from 'react'
import CarItem from '../car-item/car-item';
import './cars-list.css';
const Carslist = ({data,onDelete})=> {
	const elements = data.map((item)=>{
		const {id,...itemProps} = item;
		return (
		<CarItem key={id}  {...itemProps} onDelete={() => onDelete(id)}/>
		)
	})
	return <ul className="cars__list">{elements}</ul>;
};
export default Carslist;