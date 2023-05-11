import React, { useState } from 'react'
import './RenderCard.css'
import { dataProduct } from '../../data/data';

const RenderCard = () => {
    let [counts, setCounts] = useState(dataProduct.map(() => 0));

    const incrementCount = (index) => {
        let newCounts = [...counts];
        newCounts[index]++;
        setCounts(newCounts)
    }

    const decrementCount = (index) => {
        let newCounts = [...counts];
        if (newCounts[index] > 0) {
            newCounts[index]--;
            setCounts(newCounts)
        }
    }

    let product = dataProduct.map((item, index) => {
        return (
            <div className='card-wrapper' key={item.id}>
                <img src={item.img} alt="tovar" />
                <div className="description-section">
                    <h3>{item.title}</h3>
                    <p>{item.capacity}</p>
                    <p></p>
                </div>
                <div className="counter-section">
                    <button onClick={() => incrementCount(index)}>+</button>
                    <span>{counts[index]}</span>
                    <button onClick={() => decrementCount(index)}>-</button>
                </div>
                <div className="price-section">
                    <p>{item.price}$</p>
                    <span>Save for later</span>
                    <br />
                    <span>Remove</span>
                </div>
            </div>
        )
    })
    return (
        <>
            {product}
            <div className='total'>
                <div className="total__body">
                    <div className="total__block">
                        <div>
                            <h3>Sub-Total</h3>
                            <p>{1} items</p>
                        </div>
                        <h2 className='total__price'>6$</h2>
                    </div>
                    <button>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default RenderCard