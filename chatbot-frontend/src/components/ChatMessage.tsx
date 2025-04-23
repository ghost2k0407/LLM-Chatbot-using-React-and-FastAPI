import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
    message: string;
    isUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => {
    return (
        <div className={`message ${isUser ? 'user-message' : 'assistant-message'}`}>
            <ReactMarkdown>{message}</ReactMarkdown>
        </div>
    );
};

export default ChatMessage;
