import React from 'react';
import Gallery from './components/Gallery';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">3D Wanderlust Gallery</h1>
        <p className="text-center text-gray-600 mt-2">Explore amazing destinations in an immersive 3D experience</p>
      </header>
      <main>
        <Gallery />
      </main>
      <footer className="container mx-auto px-4 py-8 text-center text-gray-600">
        <p>© 2023 3D Wanderlust Gallery. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
