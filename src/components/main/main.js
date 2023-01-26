/** @format */

import { Component } from "react";
import Header from "../header/header";
import { Link } from "react-router-dom";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonFist: true,
      buttonSecond: false,
      buttonThere: false,
    };
  }
  
  render() {
    return (
      <>
        <Header />
        <main className="main">
          <div className="container-big">
            <div className="main__wrapper">
              <div className="main__block">
                <h2 className="main__title">СВІТЛО Є!</h2>
                <p className="main__text">ПРИХОДЬТЕ І ЗАРЯДЖАЙТЕСЯ!</p>
                <a
                  href="#"
                  className="main__btn">
                  Подробнее
                </a>
              </div>
            </div>
          </div>
        </main>
        <section className="workWith">
          <div className="container-midl">
            <h2 className="workWith-title">ПРЕИМУЩЕСТВА РАБОТЫ С НАМИ</h2>
            <ul className="workWith__list">
              <li className="workWith__item">
                  <div className="workWith__img">
                    <img
                      className="workWith__icon"
                      src="https://vidi-automarket.com.ua/bundles/automarket/img/icon/diagnost.png?v1.4.537"
                      alt="icon producteds"
                    />
                  </div>
                <h4 className="workWith__title">Диагностика</h4>
                <p className="workWith__text">
                  Все автомобили перед приемом проходят техническую диагностику
                  на наших дилерских СТО
                </p>
              </li>
              <li className="workWith__item">
                <div className="workWith__img">
                  <img
                    className="workWith__icon"
                    src="https://vidi-automarket.com.ua/bundles/automarket/img/icon/diagnost.png?v1.4.537"
                    alt="icon producteds"
                  />
                </div>
                <h4 className="workWith__title">Диагностика</h4>
                <p className="workWith__text">
                  Все автомобили перед приемом проходят техническую диагностику
                  на наших дилерских СТО
                </p>
              </li>
              <li className="workWith__item">
                <div className="workWith__img">
                  <img
                    className="workWith__icon"
                    src="https://vidi-automarket.com.ua/bundles/automarket/img/icon/diagnost.png?v1.4.537"
                    alt="icon producteds"
                  />
                </div>
                <h4 className="workWith__title">Диагностика</h4>
                <p className="workWith__text">
                  Все автомобили перед приемом проходят техническую диагностику
                  на наших дилерских СТО
                </p>
              </li>
              <li className="workWith__item">
                <div className="workWith__img">
                  <img
                    className="workWith__icon"
                    src="https://vidi-automarket.com.ua/bundles/automarket/img/icon/diagnost.png?v1.4.537"
                    alt="icon producteds"
                  />
                </div>
                <h4 className="workWith__title">Диагностика</h4>
                <p className="workWith__text">
                  Все автомобили перед приемом проходят техническую диагностику
                  на наших дилерских СТО
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="topSuggestions">
          <div className="container-midl">
            <h3 className="topSuggestions__title">ВАС МОГУТ ЗАИНТЕРЕСОВАТЬ</h3>
            <div className="topSuggestions__btns">
              <button className="topSuggestions__btn" onClick={this.fisrct}>Рекомендуем</button>
              <button className="topSuggestions__btn" onClick={this.second}>Лушая цена</button>
              <button className="topSuggestions__btn" onClick={this.therese}>
                Последние поступления
              </button>
            </div>
            <ul className="topSuggestions__list">
              
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default Main;
