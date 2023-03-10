import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/components/ChatbotHeader.css";

const ChatbotHeader = () => {

    const navigation = useNavigate();

    const goBack = () => {
        navigation(-1);
    }

    return (
        <div className='chatbot_header'>
            <div className='header_menu'>
                <div className='menu_back'><img onClick={goBack} className='menu_img' src='./images/img/back.png' alt='back menu'/></div>
                <div className='menu_title'>MMAI Chabot</div>
                <div className='menu_dots'><img className='menu_img' src='./images/img/dots.png' alt='back menu'/></div>
            </div>
        </div>
    );
};

export default ChatbotHeader;