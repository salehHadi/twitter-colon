import React from 'react'
import {CiCircleMore} from 'react-icons/ci'
import {FaRegComment} from 'react-icons/fa'
import {AiOutlineRetweet, AiOutlineHeart} from 'react-icons/ai'
import {FiUpload} from 'react-icons/fi'


function Tweets(props){

    const  {content, photo} = props
    const moment = require("moment")

    const contentEl = content? content.text.substr(0, 200): "we wish to you all the best"

    return (
        <div className='tweet'>
            <img src={photo} alt='profile img' className='tweet__profile--img header__center-Layer__img' />
            <div className='tweet__body'>
                <div className='tweet__info'>
                    <h4 className='tweet__profile--name'>saleh</h4>
                    <p className='tweet__profile--userName'>@saleh</p>
                    <p className='tweet__profile--time'>{moment().fromNow()}</p>
                    <div className='tweet__info-icon'>
                        <CiCircleMore />
                    </div>
                </div>
                <p className='tweet__content'>{contentEl}</p>
                
                <div className='tweet__intractive'>
                    <FaRegComment />
                    <AiOutlineRetweet />
                    <AiOutlineHeart />
                    <FiUpload />
                </div>
            </div>
        </div>
    )
}

export default Tweets