import React from 'react';
import "../styles/components/ChatbotSearchBar.css";

const ChatbotSearchBar = ({chatbotSearchName, setChatbotParam, setChatbotSearchName}) => {

    const onSearch = (e) => {
        setChatbotSearchName(e.target.value.toLowerCase());
    }

    if (chatbotSearchName) {
        setChatbotParam();
    }

    return (
        <div className='searchbar_box'>
            <input onChange={onSearch} className='searchbar' type="text" placeholder="search for the AI you want" />
        </div>
    );
};

export default ChatbotSearchBar;