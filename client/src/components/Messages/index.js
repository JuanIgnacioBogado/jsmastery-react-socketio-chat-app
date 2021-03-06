import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message';

import './Messages.css';

const Messages = ({messages, name}) => (
    <ScrollToBottom className="messages">
        {messages.map((message, i) => <Message key={i} {...{message, name}} />)}
    </ScrollToBottom>
);

export default Messages;