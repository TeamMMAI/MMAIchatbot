import React from 'react';
import "../styles/components/ChatbotSearchBar.css";

const ChatbotSearchBar = ({chatbotSearchName, setCheckState, setChatbotSearchName}) => {

    const onSearch = (e) => {
        setChatbotSearchName(e.target.value.toLowerCase());
    }

    if (chatbotSearchName) {
        setCheckState(false);
    }

    return (
        <div className='searchbar_box'>
            <input onChange={onSearch} className='searchbar' type="text" placeholder="search for the AI you want" />
        </div>
    );
};

export default ChatbotSearchBar;