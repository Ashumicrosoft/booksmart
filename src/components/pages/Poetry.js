import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Poetry = () => {

    const [details, setDetails] = useState([])

    useEffect(() => {

    }, [])


    return (
        <div className='poetry'>
            <div className="poetry_card">
                <div className="poetry_card_img">
                    <img src="./poetry.jpg" alt="img" className='poetry_card_img' />
                </div>

                <div className="poetry_card_title">
                    <p>title</p>
                    <p>eng</p>
                </div>

                <div className='poetry_card_price'>
                    <p>price</p>
                </div>

                <div className="poetry_add_card">
                    <Link to='/ordersummary' className='poetry_card_link'>order</Link>
                    <button className='poetry_card_button'>add to card</button>
                </div>

            </div>

        </div>
    )
}

export default Poetry

