import React, { useState } from 'react';
import './App.css';

function App() {
  const [cards] = useState([
    { id: 1, title: 'Animasi Fade In', icon: '✨' },
    { id: 2, title: 'Animasi Slide', icon: '🚀' },
    { id: 3, title: 'Animasi Bounce', icon: '⚡' },
    { id: 4, title: 'Animasi Rotate', icon: '🎯' },
    { id: 5, title: 'Animasi Scale', icon: '💎' },
    { id: 6, title: 'Animasi Pulse', icon: '❤️' }
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title fade-in">
          Selamat Datang di React Animated App
        </h1>
        <p className="subtitle slide-in-left">
          Aplikasi React dengan Berbagai Animasi CSS
        </p>
      </header>

      <main className="main-content">
        <div className="cards-container">
          {cards.map((card, index) => (
            <div 
              key={card.id} 
              className="card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-icon">{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">
                Hover untuk melihat efek animasi
              </p>
            </div>
          ))}
        </div>

        <div className="floating-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
        </div>

        <div className="interactive-section">
          <button className="animated-button">
            <span>Klik Saya!</span>
          </button>
        </div>

        <div className="loading-section">
          <div className="spinner"></div>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p className="pulse">Dibuat dengan ❤️ menggunakan React</p>
      </footer>
    </div>
  );
}

export default App;
