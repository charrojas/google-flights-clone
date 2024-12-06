import React, { useState } from 'react';
import { searchAirport, flightSearchPage } from '../api';
import SearchForm from './SearchForm';
import FlightResults from './FlightResults';
import Alert from './Alert';

const FlightSearchPage = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [flights, setFlights] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultsLimit, setResultsLimit] = useState(5);
  const [adults, setAdults] = useState(1);
  const [childrens, setChildrens] = useState(0);
  const [infants, setInfants] = useState(0);

  const handleSearch = async () => {
    setError('');
    setFlights([]);
    setResultsLimit(5);
    setLoading(true);
    try {
      const isValid = await validateInputs();
      if (!isValid) return;

      const flightData = await fetchFlights();

      if (flightData.status) {
        setFlights(flightData.itineraries);
      } else {
        setError(flightData.message || 'No se encontraron vuelos.');
      }
    } catch (err) {
      setError('Ocurrió un error al buscar vuelos.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const validateInputs = async () => {
    if (!origin || !destination || !departureDate || !returnDate) {
      setError('Por favor, completa todos los campos.');
      return false;
    }

    if (adults < 1) {
      setError('Debe haber al menos 1 adulto.');
      return false;
    }

    const originData = await searchAirport(origin);
    const destinationData = await searchAirport(destination);

    if (!originData?.length || !destinationData?.length) {
      setError('No se encontraron aeropuertos. Verifica los nombres ingresados.');
      return false;
    }

    return true;
  };

  const fetchFlights = async () => {
    const formattedDepartureDate = new Date(departureDate).toISOString().split('T')[0];
    const formattedReturnDate = new Date(returnDate).toISOString().split('T')[0];
    const originData = await searchAirport(origin);
    const destinationData = await searchAirport(destination);
    return flightSearchPage(
      originData[0].skyId,
      destinationData[0].skyId,
      originData[0].entityId,
      destinationData[0].entityId,
      formattedDepartureDate,
      formattedReturnDate,
      adults,
      childrens,
      infants,
    );
  };

  const loadMore = () => {
    setResultsLimit(prevLimit => prevLimit + 5);
  };

  const loadLess = () => {
    setResultsLimit(prevLimit => Math.max(prevLimit - 5, 5));
  };

  return (
    <div className="max-w-4xl mx-auto">
      {error && <Alert type="error" message={error} onClose={() => setError('')} />}

      <SearchForm
        origin={origin}
        setOrigin={setOrigin}
        destination={destination}
        setDestination={setDestination}
        departureDate={departureDate}
        setDepartureDate={setDepartureDate}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
        adults={adults}
        setAdults={setAdults}
        childrens={childrens}
        setChildrens={setChildrens}
        infants={infants}
        setInfants={setInfants}
        handleSearch={handleSearch} />

      {loading && (
        <div className="flex justify-center items-center w-full h-48">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-custom-green rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-custom-green rounded-full animate-bounce200"></div>
            <div className="w-4 h-4 bg-custom-green rounded-full animate-bounce400"></div>
          </div>
          <p className="text-xl font-semibold text-gray-700 ml-4">Processing...</p>
        </div>
      )}

      <FlightResults flights={flights.slice(0, resultsLimit)} />

      <div className="text-center mt-4">
        {flights.length > resultsLimit && (
          <button
            onClick={loadMore}
            className="px-6 py-3 bg-custom-green text-white rounded-lg hover:bg-green-500 transition duration-300 ease-in-out mr-4">
            Ver más
          </button>
        )}

        {resultsLimit > 5 && (
          <button
            onClick={loadLess}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out">
            Ver menos
          </button>
        )}
      </div>
    </div>
  );
};

export default FlightSearchPage;
