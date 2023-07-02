import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Novel = () => {
    const [details, setDetails] = useState([])

    useEffect(() => {

    }, [])


    return (
        <div className='novel'>
            <div className="novel_card">
                <div className="novel_card_img">
                    <img src="./novel.jpeg" alt="img" className='novel_card_img' />
                </div>

                <div className="novel_card_title">
                    <p>title</p>
                    <p>eng</p>
                </div>

                <div className='novel_card_price'>
                    <p>price</p>
                </div>

                <div className="novel_add_card">
                    <Link to='/ordersummary' className='novel_card_link'>order</Link>
                    <button className='novel_card_button'>add to card</button>
                </div>

            </div>

        </div>
    )
}

export default Novel
