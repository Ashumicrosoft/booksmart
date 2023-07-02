import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const Painting = () => {
    const [details, setDetails] = useState([])

    useEffect(() => {

    }, [])

    return (
        <div className='painting'>
            <div className="painting_card">
                <div className="painting_card_img">
                    <img src="./painting.jpg" alt="img" className='painting_card_img' />
                </div>

                <div className="painting_card_title">
                    <p>title</p>
                    <p>eng</p>
                </div>

                <div className='painting_card_price'>
                    <p>price</p>
                </div>

                <div className="painting_add_card">
                    <Link to='/ordersummary' className='painting_card_link'>order</Link>
                    <button className='painting_card_button'>add to card</button>
                </div>

            </div>

        </div>
    )
}

export default Painting
