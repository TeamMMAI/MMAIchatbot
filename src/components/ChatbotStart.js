import React from 'react';
import "../styles/components/ChatbotStart.css";

const ChatbotStart = ({chectState, chatbotParam}) => {

    const goChat = () => {
        if(chectState) {
            window.open("https://teammmai.github.io/MMAI_chatroom/chatbot_code.html")
        }
    }

    return (
        <div onClick={goChat} className={(chectState) ? 'chat_start' : 'chat_not'}>
            Selection Chatbot Complete
        </div>
    );
};

export default ChatbotStart;
