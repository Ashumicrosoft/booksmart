import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BioGraphy = () => {

    const [details, setDetails] = useState([])

    useEffect(() => {

    }, [])

    return (
        <div className='b_graphy'>
            <div className="b_graphy_card">
                <div className="b_graphy_card_img">
                    <img src="./bio.jpg" alt="img" className='b_graphy_card_img' />
                </div>

                <div className="b_graphy_card_title">
                    <p>title</p>
                    <p>eng</p>
                </div>

                <div className='b_graphy_card_price'>
                    <p>price</p>
                </div>

                <div className="b_graphy_add_card">
                    <Link to='/ordersummary' className='b_graphy_card_link'>order</Link>
                    <button className='b_graphy_card_button'>add to card</button>
                </div>

            </div>

        </div>
    )
}

export default BioGraphy
