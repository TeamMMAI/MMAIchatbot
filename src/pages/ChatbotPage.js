import React, { useState } from 'react';
import ChatbotHeader from '../components/ChatbotHeader';
import ChatbotList from '../components/ChatbotList';
import ChatbotSearchBar from '../components/ChatbotSearchBar';
import ChatbotStart from '../components/ChatbotStart';
import "../styles/page/ChatbotPage.css";

const ChatbotPage = () => {

    const chatbots = [
        {
            name : "LOGAN",
            introduction : "I'm AI specializing in Metaverse.",
            profil : <img src="./images/img/profil.png" alt='chatbot profil' />
        }, 
        {
            name : "LINGUIST",
            introduction : "I'm AI specializing in Metaverse.",
            profil : <img src="./images/img/profil.png" alt='chatbot profil' />
        }, 
        {
            name : "ECHO",
            introduction : "I'm AI specializing in Metaverse.",
            profil : <img src="./images/img/profil.png" alt='chatbot profil' />
        },
        {
            name : "MINGLE",
            introduction : "I'm AI specializing in Metaverse.",
            profil : <img src="./images/img/profil.png" alt='chatbot profil' />
        }
    ]

    // 검색창에 문자열이 들어감
    const [chatbotSearchName, setChatbotSearchName] = useState("");

    // 체크박스 체크 유무
    const [chectState, setCheckState] = useState(false);

    // 체크 된 chatbot 이름 가져옴
    const [chatbotParam, setChatbotParam] = useState();

    const searched = chatbots.filter((item) => item.name.toLowerCase().includes(chatbotSearchName))

    return (
        <>
            <div id='chatbot_wrapper'>
                <ChatbotHeader />
                <ChatbotSearchBar chatbotSearchName={chatbotSearchName} setCheckState={setCheckState} setChatbotSearchName={setChatbotSearchName} />
                <ChatbotList setCheckState={setCheckState} setChatbotParam={setChatbotParam} searched={searched} />
            </div>
            <ChatbotStart chectState={chectState} chatbotParam={chatbotParam} />
        </>
    );
};

export default ChatbotPage;