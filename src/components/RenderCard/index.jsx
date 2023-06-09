import React, { useState } from 'react'
import './RenderCard.css'
import { dataProduct } from '../../data/data';

const RenderCard = ({items, setItems}) => {
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

    const remove = (id) => {
        setItems(items.filter((i) => i.id !== id))
    }

    const totalPrice = items.reduce((acc, item, index) => {
        return acc + item.price * counts[index]
    }, 0)
    const totalItems = items.reduce((acc, item, index) => {
        return acc + counts[index]
    }, 0)

    let product = items.map((item, index) => {
        return (
            <div className='card-wrapper' key={item.id}>
                <img src={item.img} alt="tovar" />
                <div className="description-section">
                    <h3>{item.title}</h3>
                    <p>{item.capacity}</p>
                    <div className="cube"> <p className='circle'></p></div>
                </div>
                <div className="counter-section">
                    <button className="tunuk" onClick={() => incrementCount(index)}>+</button>
                    <span>{counts[index]}</span>
                    <button className="tunuk" onClick={() => decrementCount(index)}>-</button>
                </div>
                <div className="price-section">
                    <p>{item.price}$</p>
                    <span className='save'>Save for later</span>
                    <br />
                    <button className='remove' onClick={() => remove(item.id)}>Remove</button>
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
                            <p>{totalItems} items</p>
                        </div>
                        <h2 className='total__price'>${totalPrice.toFixed(2)}</h2>
                    </div>
                    <button className="check" onClick={() => alert(`Вы купили ${totalItems} газировок на сумму ${totalPrice.toFixed(2)}$`)}>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default RenderCard