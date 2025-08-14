# 🧠 LLM Chatbot using React & FastAPI

An AI-powered chatbot application built with **FastAPI** (Python) for the backend and **React + TypeScript + Vite** for the frontend.  
It integrates an **LLM-based QA system** with custom rule-based logic, providing real-time conversational responses.

---

## 📂 Project Structure

```
LLM-Chatbot-using-React-and-FastAPI-main/
│
├── chatbot-backend/       # FastAPI backend
│   ├── main.py             # Backend entry point
│   ├── config.py           # Environment configuration
│   ├── routes.py           # API routes
│   ├── qa_chain.py         # LLM QA logic
│   ├── rules.txt           # Rule-based responses
│   ├── requirements.txt    # Python dependencies
│   ├── .env                # Environment variables
│   └── Constitution_Index/ # FAISS index files
│
├── chatbot-frontend/      # React + TypeScript + Vite frontend
│   ├── src/
│   │   ├── App.tsx
│   │   ├── api.ts          # API helper functions
│   │   ├── components/     # Chat UI components
│   │   └── assets/         # Images and icons
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.ts      # Vite configuration
│   └── index.html
│
└── README.md              # This file
```

---

## ⚙️ Backend Setup (FastAPI)

### 4️⃣ Run the Backend
```bash
uvicorn main:app --reload
```
Backend will be available at **http://127.0.0.1:8000**

---

## 💻 Frontend Setup (React + TypeScript + Vite)

### 1️⃣ Install Node.js Dependencies
```bash
cd chatbot-frontend
npm install
```

### 2️⃣ Run the Frontend
```bash
npm run dev
```
Frontend will be available at the URL printed in your terminal (usually **http://localhost:5173**).

---

## 🔄 Connecting Frontend & Backend
In `chatbot-frontend/src/api.ts`, ensure the backend URL is correct:
```ts
const API_URL = "http://127.0.0.1:8000";
```

---

## 🚀 Features
- **LLM-based Question Answering**
- **Rule-based Fallback Responses**
- **Real-time Chat UI**
- **FAISS Vector Search Integration**
- **Responsive Design**

---


## 🛠 Tech Stack
**Backend:**
- FastAPI
- FAISS
- LangChain
- Python-dotenv

**Frontend:**
- React
- TypeScript
- Vite
- TailwindCSS

---
