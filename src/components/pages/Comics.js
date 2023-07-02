import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Comics = () => {
    const [details, setDetails] = useState([])

    useEffect(() => {

    }, [])

    return (
        <div className='comics'>
            <div className="comics_card">
                <div className="comics_card_img">
                    <img src="./comics.jpg" alt="img" className='comics_card_img' />
                </div>

                <div className="comics_card_title">
                    <p>title</p>
                    <p>lang</p>
                </div>

                <div className='comics_card_price'>
                    <p>price</p>
                </div>

                <div className="comics_add_card">
                    <Link to='/ordersummary' className='comics_card_link'>order</Link>
                    <button className='comics_card_button'>add to card</button>
                </div>

            </div>

        </div>
    )
}

export default Comics
