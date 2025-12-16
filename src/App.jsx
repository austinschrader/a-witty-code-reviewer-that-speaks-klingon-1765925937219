import React from 'react'
import ChatInterface from './components/ChatInterface'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <ChatInterface agentDescription="A witty code reviewer that speaks Klingon" />
    </div>
  )
}

export default App
