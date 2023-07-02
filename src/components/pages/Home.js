import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

    const [details, setDetails] = useState([])

    useEffect(() => {

    }, [])


    return (
        <div className='home'>
            <div className="home_card">
                <div className="home_card_img">
                    <img src="./poetry.jpg" alt="img" className='home_card_img' />
                </div>

                <div className="home_card_title">
                    <p>title</p>
                    <p>eng</p>
                </div>

                <div className='home_card_price'>
                    <p>price</p>
                </div>

                <div className="home_add_card">
                    <Link to='/ordersummary' className='home_card_link'>order</Link>
                    <button className='home_card_button'>add to card</button>
                </div>

            </div>
        </div>
    )
}

export default Home
