import React from 'react';
import "../styles/components/ChatbotStart.css";

const ChatbotStart = ({chectState, chatbotParam}) => {
    return (
        <div className={(chectState) ? 'chat_start' : 'chat_not'}>
            Selection Chatbot Complete
        </div>
    );
};

export default ChatbotStart;