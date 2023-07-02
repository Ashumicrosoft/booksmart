import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Politics = () => {

    const [details, setDetails] = useState([])

    useEffect(() => {

    }, [])

    return (
        <div className='politics'>
            <div className="politics_card">
                <div className="politics_card_img">
                    <img src="./pilitics.jpg" alt="img" className='politics_card_img' />
                </div>

                <div className="politics_card_title">
                    <p>title</p>
                    <p>eng</p>
                </div>

                <div className='politics_card_price'>
                    <p>price</p>
                </div>

                <div className="politics_add_card">
                    <Link to='/ordersummary' className='politics_card_link'>order</Link>
                    <button className='politics_card_button'>add to card</button>
                </div>

            </div>

        </div>
    )
}

export default Politics
