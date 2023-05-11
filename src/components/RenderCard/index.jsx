import React from 'react'
import './RenderCard.css'
import { dataProduct } from '../../data/data';

const RenderCard = () => {
    let product = dataProduct.map((item) => {
        return (
            <div className='card-wrapper'>
                <img src={item.img} alt="tovar" />
                <div className="description-section">
                    <h3>{item.title}</h3>
                    <p>{item.capacity}</p>
                    <p></p>
                </div>
                <div className="counter-section">
                    <button>+</button>
                    <span>1</span>
                    <button>-</button>
                </div>
                <div className="price-section">
                    <p>{item.price}</p>
                    <span>Save for later</span>
                    <br />
                    <span>Remove</span>
                </div>
            </div>
        )
    })
  return product
}

export default RenderCard