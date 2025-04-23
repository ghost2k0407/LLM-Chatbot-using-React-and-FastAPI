import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator'; // <-- add this
import { askQuestion } from '../api';

const ChatContainer: React.FC = () => {
    const [messages, setMessages] = useState<{ message: string; isUser: boolean }[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSendMessage = async (message: string) => {
        setMessages((prevMessages) => [...prevMessages, { message, isUser: true }]);
        setLoading(true);

        try {
            const response = await askQuestion(message);
            setMessages((prevMessages) => [...prevMessages, { message: response, isUser: false }]);
        } catch (error) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { message: 'Something went wrong. Please try again.', isUser: false },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="chat-container">
            <ChatHeader />
            <div className="chat-messages">
                {messages.map((msg, idx) => (
                    <ChatMessage key={idx} message={msg.message} isUser={msg.isUser} />
                ))}
                {loading && <TypingIndicator />} {/* <-- updated this */}
            </div>
            <ChatInput onSend={handleSendMessage} />
        </div>
    );
};

export default ChatContainer;
