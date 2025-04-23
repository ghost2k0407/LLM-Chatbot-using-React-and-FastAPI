import React from 'react';

const ChatHeader: React.FC = () => {
    return (
        <div className="chat-header">
            <h1>ICC - INDIAN CONSTITUTION CHATBOT</h1>
            <div className="icons">
                <i className="fas fa-robot"></i>
                <i className="fas fa-ellipsis-v"></i>
            </div>
        </div>
    );
};

export default ChatHeader;
