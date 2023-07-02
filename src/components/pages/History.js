import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const History = () => {
    const [details, setDetails] = useState([])

    useEffect(() => {

    }, [])


    return (
        <div className='history'>
            <div className="history_card">
                <div className="history_card_img">
                    <img src="./history.jpg" alt="img" className='history_card_img' />
                </div>

                <div className="history_card_title">
                    <p>title</p>
                    <p>eng</p>
                </div>

                <div className='history_card_price'>
                    <p>price</p>
                </div>

                <div className="history_add_card">
                    <Link to='/ordersummary' className='history_card_link'>order</Link>
                    <button className='history_card_button'>add to card</button>
                </div>

            </div>
        </div>
    )
}

export default History

