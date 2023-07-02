import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PhotoGraphy = () => {

    const [details, setDetails] = useState([])

    useEffect(() => {

    }, [])

    return (
        <div className='p_graphy'>
            <div className="p_graphy_card">
                <div className="p_graphy_card_img">
                    <img src="./photography.jpg" alt="img" className='p_graphy_card_img' />
                </div>

                <div className="p_graphy_card_title">
                    <p>title</p>
                    <p>eng</p>
                </div>

                <div className='p_graphy_card_price'>
                    <p>price</p>
                </div>

                <div className="p_graphy_add_card">
                    <Link to='/ordersummary' className='p_graphy_card_link'>order</Link>
                    <button className='p_graphy_card_button'>add to card</button>
                </div>

            </div>
        </div>
    )
}

export default PhotoGraphy
