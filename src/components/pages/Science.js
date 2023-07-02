import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Science = () => {
    const [details, setDetails] = useState([])

    useEffect(() => {

    }, [])
    return (
        <div className='science'>
            <div className="science_card">
                <div className="science_card_img">
                    <img src="/science.jpg" alt="img" className='science_card_img' />
                </div>

                <div className="science_card_title">
                    <p>title</p>
                    <p>eng</p>
                </div>

                <div className='science_card_price'>
                    <p>price</p>
                </div>

                <div className="science_add_card">
                    <Link to='/ordersummary' className='science_card_link'>order</Link>
                    <button className='science_card_button'>add to card</button>
                </div>

            </div>

        </div>
    )
}

export default Science
