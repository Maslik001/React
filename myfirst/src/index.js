import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const audiImg = 'https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8ysar/2021.png?wid=850';
const bmwImg = 'https://www.bmw-kz.com/content/dam/bmw/common/all-models/m-series/m235i/2021/navigation/BMW-2-Series-gran-coupe_ModelCard.png.asset.1636441815128.png'
const opelImg = 'https://www.pngplay.com/wp-content/uploads/2/Opel-Car-Background-PNG.png'
const carImage = [audiImg, bmwImg, opelImg];
const carName = ['Audi', 'BMW', 'Opel'];
const carPower = ['360hp', '220hp', '90hp'];
let cardNew = carName.map(function (carName, index) {
    return <div className={'card'} key={index.toString()}>
        <img className={'car-img'} src={carImage[index]}/>
        <h3>{carName}</h3>
        <span>{carPower[index]}</span>
        <button><span>Buy Now</span></button>
    </div>
})

let cardRender = () => {
    return cardNew;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className={'title'}><h1>Hello World</h1>
        {cardRender()}
    </div>,
);
reportWebVitals();
