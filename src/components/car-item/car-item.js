 import './car-item.css';

 const CarItem =(props)=>{
	const{name,yersCreate,mileage,type,motor,tracmichion,machineBox,price,img,onDelete} = props;
	return(
		<li className="item">
							<img className="item__img" src={img !=="" ?img: "https://vidi-automarket.com.ua/bundles/automarket/img/catalog/not_filled.png?v1.4.537"} alt="img car" />
							<div className="item__block">
							<div className="item__line">
								<h4 className="item__title">{name}</h4> 
								<span className="item__yearCreate">{yersCreate}</span>
							</div>
							<div className="item__mileage"><span>{mileage} км</span></div>
							<div className="item__line-info">
								<div className="item__type"><span>{type}</span></div>
								<div className="item__motor"><span>{motor}</span></div>
							</div>
							<div className="item__line-info">
								<div className="item__transmission"><span>{machineBox}</span></div>
								<div className="item__typeDrive"><span>{tracmichion}</span></div>
							</div>
							<div className="item__prise"><span>{price}</span></div>
							<button
                      type="button" className="item__btn" onClick={onDelete}>Delete</button>
							</div>
						</li>
	)
	}

 export default CarItem;