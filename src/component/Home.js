import React, {useContext, useState} from "react";
import Sidebar from "./Sidebar";
import Tweets from "./Tweets";
import {MdOutlineAppRegistration} from 'react-icons/md'
import {BsImage} from 'react-icons/bs'
import {AiOutlineFileGif} from 'react-icons/ai'
import {BsEmojiSmile} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'
import {DataBaise} from '../Data/DataBaise'



function Home(){
    const [formValut, setFormValue] = useState('')
    const {dataWithPicture, addTweet} = useContext(DataBaise)
    const tweetEl = dataWithPicture.map(el => {
        return <Tweets content={el.content} photo={el.photo} />
    })

    const handleFormChange = (event) => {
        event.preventDefault()
        setFormValue(event.target.value)
    }

    const submitForm = (event) => {
        event.preventDefault()
        addTweet(formValut)
        setFormValue('')
    }


    return (
        <div className="container">
            <Sidebar />
            <div className="main__content">
                <header className="header">
                    <div className="header__top-Layer">
                        <h3>Home</h3>
                        <MdOutlineAppRegistration />
                    </div>
                    <div className="header__center-Layer">
                        <img className="header__center-Layer__img" src='https://upcdn.io/FW25awy/raw/277784206_2158174651023478_5857800306420580049_n-79Cx.jpg' alt='profile img' />
                        <form onSubmit={submitForm} className="header__center-Layer__form">
                            <input value={formValut} onChange={handleFormChange} type="text" placeholder="what is happing?" className="header__center-Layer__form--text" />
                            <div className="header__center-Layer__form--icons">
                                <BsImage />
                                <AiOutlineFileGif />
                                <BsEmojiSmile />
                                <CiLocationOn />
                                <button type="button" onClick={submitForm} className="header__center-Layer__form--btn">Tweet</button>
                            </div>
                        </form>
                    </div>
                </header>
                
                {tweetEl}
            </div>
        </div>
    )
}

export default Home