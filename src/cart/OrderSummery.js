import React from 'react'
import { Link } from 'react-router-dom'

const OrderSummery = () => {
    return (
        <div className="summery">
            <div className="summery_card1">
                <div className="summery_card1_img">
                    <img src="./poetry.jpg" alt="img" className='summery_card1_img' />
                </div>

            </div>

            <div className="summery_card2">
                <div className="summery_card1_title">
                    <p>title</p>
                    <p>author</p>
                    <p>language</p>
                </div>

                <div className='summery_card1_price'>
                    <p>price</p>
                    <p>publication</p>
                </div>

                <div className="order_detils">
                    <p>description</p>
                </div>

                <div className="summery_add_card1">
                    <button className='summery_card1_button1'>Confirm order</button>
                </div>
            </div>


            <div className="summery_card3">
                <p className='add_items'>add items</p>
                <button className='item_increase'>+</button>
                <button className='item_decrease'>-</button>
            </div>

        </div>
    )
}

export default OrderSummery
