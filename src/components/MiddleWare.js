import React from 'react'
import { Link } from 'react-router-dom'

const MiddleWare = () => {
    return (
        <div className='middle'>
            <ul className='middle_links'>
                <li className='mid_links_li'>
                    <Link to='/poetry' className='mid_links'>
                        <img src="./poetry.jpg" alt="poetry" className='mid_links_img' />
                        <br />
                        <p className='mid_links_texts'>poetry</p>
                    </Link>
                </li>

                <li>
                    <Link to='/history' className='mid_links'>
                        <img src="./history.jpg" alt="history"
                            className='mid_links_img' />
                        <br />
                        <span className='mid_links_texts'>history</span>
                    </Link>
                </li>

                <li>
                    <Link to='/science' className='mid_links'>
                        <img src="./science.jpg" alt="science"
                            className='mid_links_img' />
                        <br />
                        <span className='mid_links_texts'>science</span>
                    </Link>
                </li>

                <li>
                    <Link to='/novel' className='mid_links'>
                        <img src="./novel.jpeg" alt="novel"
                            className='mid_links_img' />
                        <br />
                        <span className='mid_links_texts'>novel</span>
                    </Link>
                </li>

                <li>
                    <Link to='/photography' className='mid_links'>
                        <img src="./photography.jpg" alt="photography"
                            className='mid_links_img' />
                        <br />
                        <span className='mid_links_texts'>p-graphy</span>
                    </Link>
                </li>

                <li>
                    <Link to='/biography' className='mid_links'>
                        <img src="./bio.jpg" alt="biography"
                            className='mid_links_img' />
                        <br />
                        <span className='mid_links_texts'>b-graphy</span>
                    </Link>
                </li>

                <li>
                    <Link to='/painting' className='mid_links'>
                        <img src="./painting.jpg" alt="paintings"
                            className='mid_links_img' />
                        <br />
                        <span className='mid_links_texts'>painting</span>
                    </Link>
                </li>

                <li>
                    <Link to='/comics' className='mid_links'>
                        <img src="./comics.jpg" alt="comics"
                            className='mid_links_img' />
                        <br />
                        <span className='mid_links_texts'>comics</span>
                    </Link>
                </li>

                <li>
                    <Link to='/politics' className='mid_links'>
                        <img src="./pilitics.jpg" alt="politics"
                            className='mid_links_img' />
                        <br />
                        <span className='mid_links_texts'>politics</span>
                    </Link>
                </li>
            </ul>

        </div>
    )
}

export default MiddleWare
