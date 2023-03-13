import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/page/MainPage.css"

const MainPage = () => {

    const navigtion = useNavigate();

    const goChatbotPage = () => {
        navigtion("/chatbot")
    }

    return (
        <div className='main_container'>
            <img className='main_img' src='./images/img/start_img.webp' alt='MMAI Chatbot'/>
            <div className='chatbot_start_box'>
                <div className='chatbot_start' onClick={goChatbotPage}>Start with Chatting AI</div>
            </div>
        </div>
    );
};

export default MainPage;