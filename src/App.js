import React from 'react';
import FlightSearchPage from './components/FlightSearchPage';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-custom-green text-white p-4 text-center shadow-md">
        <h1 className="text-2xl font-poppins">Google Flights</h1>
      </header>

      <main className="flex-1 p-6">
        <FlightSearchPage />
      </main>

      <footer className="bg-custom-green text-white p-4 text-center mt-6">
        <h2 className="text-sm">© Charlotte Rojas Padilla - 2024</h2>
      </footer>
    </div>
  );
}

export default App;





