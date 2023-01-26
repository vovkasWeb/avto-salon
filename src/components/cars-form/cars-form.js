/** @format */

import { Component } from "react";

class CarsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      yersCreate: 0,
      mileage: 0,
      type: "",
      motor: "",
      tracmichion: "",
      machineBox: "",
      price: 0,
      img: "",
      recommendation: false,
      goodsPrice: false,
      new: true,
    };
  }
  onValueChange = (e) => {
	this.setState({
	  [e.target.name]: e.target.value,
	});
 };

 onSubmit = (e) => {
	e.preventDefault();
	  this.setState({
		name: "",
      yersCreate: 0,
      mileage: 0,
      type: "",
      motor: "",
      tracmichion: "",
      machineBox: "",
      price: 0,
      img: "",
      recommendation: false,
      goodsPrice: false,
      new: true,
	  });
	
 };
  render() {
    const {
      name,
      yersCreate,
      mileage,
      type,
      motor,
      tracmichion,
      machineBox,
      price,
      img,
    } = this.state;
	 
    return (
      <div className="app-add-form">
        <h3>Добавьте новое авто </h3>
        <form
          c
          lassName="add-form d-flex"
          onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <p>yersCreate</p>
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="yersCreate"
            name="yersCreate"
            value={yersCreate}
            onChange={this.onValueChange}
          />
          <p>mileage</p>
          <input
            type="number"
            className="form-control new-post-label"
            placeholder=" mileage"
            name="mileage"
            value={ mileage}
            onChange={this.onValueChange}
          />
			  <p>type</p>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="type"
            name="type"
            value={type}
            onChange={this.onValueChange}
          />
			  <p>motor</p>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="motor"
            name="motor"
            value={motor}
            onChange={this.onValueChange}
          />
			   <p>tracmichion</p>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="tracmichion"
            name="tracmichion"
            value={tracmichion}
            onChange={this.onValueChange}
          />
			    <p>machineBox</p>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="machineBox"
            name="machineBox"
            value={machineBox}
            onChange={this.onValueChange}
          />
			    <p>machineBox</p>
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="price"
            name="price"
            value={price}
            onChange={this.onValueChange}
          />
			     <p>img</p>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="img"
            name="img"
            value={img}
            onChange={this.onValueChange}
          />
          <button
            type="submit"
            className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default CarsForm;
