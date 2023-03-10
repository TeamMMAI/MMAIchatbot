import React from 'react';
import "../styles/components/ChatbotItem.css"

const ChatbotItem = ({bot, setCheckState, setChatbotParam}) => {

    const onChoice = (e) => {
        if (e.target.checked) {
            setCheckState(true);
            setChatbotParam(e.target.value)
        } else {
            setCheckState (false)
            setChatbotParam("")
        }

        const checkboxes = document.getElementsByName('check')
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i] !== e.target) {
                checkboxes[i].checked = false
            }
        }

    }

    return (
        <div className='chatbot_item'>
            <div className='bot_info'>
                <div className='checkbox'>
                    <input type="checkbox" name='check' onChange={e=> onChoice(e)} value={bot.name}/>
                </div>
                <div>{bot.profil}</div>
                <div className='bot_name'>{bot.name}</div>
                <div className='bot_introduction'>{bot.introduction}</div>
            </div>
        </div>
    );
};

export default ChatbotItem;