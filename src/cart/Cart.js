import React from 'react'

const Cart = () => {
    return (
        <div className='card_page'>
            <div className="card_summery1">
                <img src="" alt="product" className='cart_img' />
                <p className='cart_title'>title</p>
                <p className='cart_price'>price</p>
                <button className='item_cart_increase'>+</button>
                <p className='item_count'>1</p>
                <button className='item_cart_decrease'>-</button>
            </div>

            <div className="card_summery1">
                <img src="" alt="product" className='cart_img' />
                <p className='cart_title'>title</p>
                <p className='cart_price'>price</p>
                <button className='item_cart_increase'>+</button>
                <p className='item_count'>1</p>
                <button className='item_cart_decrease'>-</button>

            </div>
            <div className="card_summery2">
                <button className='confirm_order'>confirm order</button>
            </div>
        </div>
    )
}

export default Cart