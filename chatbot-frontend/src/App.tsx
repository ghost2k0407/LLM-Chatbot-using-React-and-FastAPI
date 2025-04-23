// App.tsx
import React from 'react';
import './App.css';
import ChatContainer from './components/ChatContainer';

const App: React.FC = () => {
    return (
        <div className="App">
            <ChatContainer />
        </div>
    );
};

export default App;
