import React from 'react';
import ChatbotItem from './ChatbotItem';
import "../styles/components/ChatbotList.css"

const ChatbotList = ({setCheckState, setChatbotParam, searched}) => {
    return (
        <div className='chatbot_list'>
            {searched.map((bot) => 
                <ChatbotItem bot={bot} setCheckState={setCheckState} setChatbotParam={setChatbotParam} />)}
        </div>
    );
};

export default ChatbotList;